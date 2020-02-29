const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const microbiomeUrl = `https://microbiomedigest.com/`;

function getLastArticle() {
  return axios.get(microbiomeUrl)
    .then(getHtml)
    .then(getLastArticleUrl)
    .then((url) => axios.get(url));
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
};
