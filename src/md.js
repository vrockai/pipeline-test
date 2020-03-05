function generateMarkdown(metadata) {
  let md = `## ${metadata.name}\n`;

  if (metadata.date || metadata.authors) {
    if (metadata.date) {
      md = md + ` ${metadata.date}, `;
    }

    if (metadata.authors) {
      md = md + `_${(metadata.authors || []).join(', ')}_\n`;
    }

    md = md + `\n\n`;
  }

  if (metadata.mesh && metadata.mesh.length) {
    md = md + `_${(metadata.mesh || []).join(', ')}_\n`;
  }

  if (metadata.abstract) {
    md = md + `${metadata.abstract}\n`;
  }

  if (metadata.href) {
    md = md + `\n[Source](${metadata.href})\n`;
  }

  if (metadata.doi) {
    md = md + `\n${metadata.doi}\n`
  }

  return md + `\n---\n`;
}

module.exports = {
  generateMarkdown
};
