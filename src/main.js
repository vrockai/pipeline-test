const { levenshteinDistance } = require("./util");
const { generateMarkdown } = require("./md");
const { getLastArticle } = require("./microbiome");
const { getArticles } = require("./microbiome");
const { getHtml } = require("./microbiome");
const { sleep } = require("./util");
const { getMetadata } = require("./xml");
const { fetchArticle, search } = require('./pubmed.js');

getLastArticle()
  .then(getHtml)
  .then(getArticles)
  .then(processArticles)
  .then((meta) => {
    meta.forEach((md) => {
      console.log(generateMarkdown(md));
    })
  });

async function processArticles(articles) {
  const metadata = [];
  for (const article of articles) {
    try {
      const articleList = await search(article.name);
      if (!articleList.length) {
        throw `Can't find article "${article.name}".`;
      }
      const articleXml = await fetchArticle(articleList[0]);
      const md = getMetadata(articleXml, article.href);
      metadata.push(md);

      await sleep(2000);

      if (levenshteinDistance(article.name, md.name) > 5) {
        throw `Article mismatch, "${md.name}" title is too different to the original "${article.name}" title.`;
      }
    } catch (e) {
      console.error(`Error while processing ${article.name}`);
      console.error(e.toString());
      metadata.push({
        name: article.name,
        href: article.href,
      })
    }
  }

  return metadata;
}
