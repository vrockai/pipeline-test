const axios = require('axios');
const { email, toolName } = require('./constants.js');

module.exports = {
  search,
  fetchArticle: fetchArticle
};

function search(term, tool = toolName, email_ = email) {
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi`;

  return axios
    .get(url, {
      params: {
        db: 'pubmed',
        term,
        tool,
        email: email_
      }
    })
    .then(function({ data }) {
      const matches = [];
      const idRegex = /<Id>(.+)<\/Id>/g;

      let idMatch;
      while ((idMatch = idRegex.exec(data)) !== null) {
        matches.push(idMatch[1]);
      }

      return matches;
    })
}

function fetchArticle(id, tool = toolName, email_ = email) {
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi`;
  return axios
    .get(url, {
      params: {
        db: 'pubmed',
        id,
        tool,
        email: email_,
        rettype: 'abstract',
        retmode: 'xml'
      }
    })
    .then(function({ data }) {
      return data;
    })
}
