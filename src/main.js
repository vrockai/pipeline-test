const parseAbstract = require('./util');
const { levenshteinDistance } = require("./util");
const { generateMarkdown } = require("./md");
const { getLastArticle } = require("./microbiome");
const { getArticles } = require("./microbiome");
const { getHtml } = require("./microbiome");
const { sleep } = require("./util");
const { getMetadata } = require("./xml");
const { fetchArticle, search } = require('./pubmed.js');
const { title } = require('./constants.js');

getLastArticle()
  .then(getHtml)
  .then(getArticles)
  .then(bar)
  .then((meta) => {
    meta.forEach((md) => {
      console.log(generateMarkdown(md));
    })
  });

getLastArticle();

async function bar(articles) {
  const metadata = [];
  let i = 0;
  for (const article of articles) {
    try {
      const articleList = await search(article.name);
      const articleXml = await fetchArticle(articleList[0]);
      const md = getMetadata(articleXml, article.href);
      metadata.push(md);

      await sleep(2000);

      if (levenshteinDistance(article.name, md.name) > 5) {
        throw 'different article';
      }
    } catch (e) {
      metadata.push({
        name: article.name,
        href: article.href,
      })
    }
  }

  return metadata;
}
