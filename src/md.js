function generateMarkdown(metadata) {
  let md = `## ${metadata.name}\n`;

  if (metadata.date || metadata.authors) {
    md = md + `###`;

    if (metadata.date) {
      md = md + ` ${metadata.date}`;
    }

    if (metadata.authors) {
      md = md + ` ${(metadata.authors || []).join(', ')}`;
    }

    md = md + `\n`;
  }

  if (metadata.mesh && metadata.mesh.length) {
    md = md + `_${(metadata.mesh || []).join(', ')}_\n`;
  }

  if (metadata.abstract) {
    md = md + `${metadata.abstract}\n`;
  }

  if (metadata.href) {
    md = md + `\n[${metadata.href}](${metadata.href})\n`;
  }

  if (metadata.doi) {
    md = md + `\n[sci-hub link](http://scihub.bban.top/${metadata.doi})\n`
  }

  return md + `\n`;
}

module.exports = {
  generateMarkdown
};
