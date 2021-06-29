import { ReactElement } from 'react';
import { minify } from 'html-minifier-terser';
import { renderToString } from 'react-dom/server';

const ReactToHTML = (element: ReactElement) => {
  const html = minify(
    renderToString(element)
      .replaceAll(/(data-reactroot=")([a-zA-Z0-9:;.\s()\-,]*)(")/gi, '')
      .replaceAll(/(data-prop=")([a-zA-Z0-9:;.\s()\-,]*)(")/gi, ''),
    {
      keepClosingSlash: true,
      preserveLineBreaks: true,
    },
  ).replaceAll('><', '>\n<');
  return html;
};

export default ReactToHTML;
