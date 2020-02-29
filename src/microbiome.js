const axios = require('axios');
const jsdom = require("jsdom");
const { fetchArticle } = require("./pubmed");
const { search } = require("./pubmed");
const { JSDOM } = jsdom;
const parser = require('xml2json');
const _ = require('lodash');
//const art = require('./bar.json');
const convert = require('xml-js');
const microbiomeUrl = `https://microbiomedigest.com/`;

function getLastArticle() {
  return axios.get(microbiomeUrl)
    .then(getHtml)
    .then(getLastArticleUrl)
    .then((url) => axios.get(url));
}

function getMetadata(articleJson) {
  const xdate = _.get(articleJson, 'PubmedArticleSet.PubmedArticle.MedlineCitation.DateRevised', '');
  const date = _.get(articleJson, 'PubmedArticleSet.PubmedArticle.MedlineCitation.DateCompleted', xdate);
  const mesh = _.get(articleJson, 'PubmedArticleSet.PubmedArticle.MedlineCitation.MeshHeadingList.MeshHeading', []).map((mesh) => {
    return _.get(mesh, 'DescriptorName.$t');
  });
  return {
    mesh,
    date: `${date.Day}.${date.Month}.${date.Year}`,
    authors: _.get(articleJson, 'PubmedArticleSet.PubmedArticle.MedlineCitation.Article.AuthorList.Author', []).map((author) => {
      return `${author.Initials} ${author.LastName}`
    }),
    name: _.get(articleJson, 'PubmedArticleSet.PubmedArticle.MedlineCitation.Article.ArticleTitle', 'TITLE UNKNOWN'),
    doi: _.get(articleJson, 'PubmedArticleSet.PubmedArticle.MedlineCitation.Article.ELocationID.$t', ''),
    abstract: _.get(articleJson, 'PubmedArticleSet.PubmedArticle.MedlineCitation.Article.Abstract.AbstractText', ''),
  }
}

async function bar(articles) {
  const metadata = [];
  let i = 0;
  for (const article of articles) {
    console.log('Processing ', article);
    if (i > 5) break;
    i++;
    try {
      const foo = await search(article.name);
      const bar = await fetchArticle(foo[0]);
      const md = getMetadata(parser.toJson(bar));
      console.log('\n');
      console.log('\n');
      console.log('md', md);
      metadata.push(md);
      await sleep(2000);
    } catch (e) {
      metadata.push({
        name: article.name,
        href: article.href,
        mesh: [],
      })
    }
  }

  console.log('metadata', metadata);
  return metadata;
}

function getHtml(response) {
  return response.data;
}

function getArticles(html) {
  const dom = new JSDOM(html);
  const aList = dom.window.document.querySelectorAll("article > div > *:not(#jp-post-flair) a");
  const articles = [];

  aList.forEach((a) => {
    const name = a.innerHTML;
    const href = a.getAttribute('href');
    articles.push({
      name,
      href
    });

  });
  return articles;
}

function getLastArticleUrl(html) {
  const dom = new JSDOM(html);
  const aList = dom.window.document.querySelectorAll(".widget_recent_entries a");
  return aList[0].getAttribute('href');
}

module.exports = {
  getHtml,
  getArticles,
  getLastArticle,
  getLastArticleUrl,
};
