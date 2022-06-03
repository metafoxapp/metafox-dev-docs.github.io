/** @jsx jsx */
/* eslint react/jsx-key: 0 */
/* eslint-disable-react/jsx-pascal-case */
import Highlight, { defaultProps } from "prism-react-renderer";
import { jsx, Styled } from "theme-ui";
import Prism from "prism-react-renderer/prism";
import { usePrismTheme } from "~utils/theme";
// dracula
// duotoneDark
// duotoneLight
// github
// nightOwl
// nightOwlLight
// oceanicNext
// okaidia
// palenight
// shadesOfPurple
// synthwave84
// ultramin
// vsDark
// vsLight
// import prismTheme from "prism-react-renderer/themes/okaidia";

(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-php");

export const Code = ({ children, className: outerClassName }) => {
  const [language] = outerClassName
    ? outerClassName.replace(/language-/, "").split(" ")
    : ["text"];
  const prismTheme = usePrismTheme();

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={prismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Styled.pre
          className={`${outerClassName || ""} ${className}`}
          style={{ ...style, overflowX: "auto" }}
          data-testid="code"
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span
                  {...getTokenProps({ token, key })}
                  sx={{ display: "inline-block" }}
                />
              ))}
            </div>
          ))}
        </Styled.pre>
      )}
    </Highlight>
  );
};
