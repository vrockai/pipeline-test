const libxmljs = require("libxmljs");
const striptags = require("striptags");

function isElement(node) {
  return node.type() === 'element';
}

function processDate(dateElement) {
  const day = dateElement.get('Day').text();
  const month = dateElement.get('Month').text();
  const year = dateElement.get('Year').text();
  return `${day}.${month}.${year}`;
}

function processMesh(xmlElement) {
  return xmlElement.get('DescriptorName').text();
}

function processAuthor(authorXmlElement) {
  const initials = authorXmlElement.get('Initials').text();
  const lastName = authorXmlElement.get('LastName').text() ;
  return `${initials} ${lastName}`;
}

function sanitize(text) {
  return striptags(text.replace(/\s+/g,' ')).trim();
}


function getMetadata(xml, href) {

  const foobar = {
    childNodes: () => []
  };

  const xmlDoc = libxmljs.parseXmlString(xml);

  const abstractText = xmlDoc.get('//AbstractText') || '';
  const abstract = sanitize(abstractText.toString());

  const doi = xmlDoc.get('//ELocationID[@EIdType="doi"]').text();
  const dateRevised = xmlDoc.get('//DateRevised');
  const dateCompleted = xmlDoc.get('//DateCompleted');
  const mesh = (xmlDoc.get('//MeshHeadingList') || foobar)
    .childNodes()
    .filter(isElement)
    .map(processMesh);

  const authors = (xmlDoc.get('//AuthorList') || foobar)
    .childNodes()
    .filter(isElement)
    .map(processAuthor);

  const abstractTitle = xmlDoc.get('//ArticleTitle') || '';
  const name = sanitize(abstractTitle.toString());

  return {
    date: processDate(dateRevised || dateCompleted),
    href,
    doi,
    authors,
    mesh,
    name,
    abstract
  }
}

module.exports = {
  getMetadata
};
