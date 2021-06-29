import React, { ReactElement, ReactNode } from 'react';
import formatHTML from 'html-format';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import htmlbars from 'react-syntax-highlighter/dist/esm/languages/hljs/htmlbars';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ReactToHTML from '../../components/ReactToHTML';
import { Button } from '../../components/index';
import '@stackoverflow/stacks/dist/css/stacks.min.css';

const Wrapper = ({ children }: { children: ReactNode }): ReactElement => {
  const [showHTML, setShowHTML] = React.useState(false);
  React.useEffect(
    () => SyntaxHighlighter.registerLanguage('html', htmlbars),
    [],
  );

  return (
    <>
      {children}
      <div className="mt24">
        {showHTML ? (
          <>
            <SyntaxHighlighter
              className="ba bc-black-100 bar-md p16"
              language="html"
              style={atomOneLight}
            >
              {/* @ts-ignore */}
              {formatHTML(ReactToHTML(children), ' '.repeat(4), 120)}
            </SyntaxHighlighter>
          </>
        ) : (
          <Button variant="link" onClick={() => setShowHTML(!showHTML)}>
            Show HTML
          </Button>
        )}
      </div>
    </>
  );
};

export default Wrapper;
