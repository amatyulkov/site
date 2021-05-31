import * as React from 'react';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import codeBlock from './code-block.module.css';

export type PrismLanguage =
  | 'typescript'
  | 'tsx'
  | 'javascript'
  | 'html'
  | 'css';

type CodeBlockProps = {
  isTheater?: boolean;
};

export const CodeBlock: React.FC<CodeBlockProps> = props => (
  <pre
    className={[
      codeBlock.wrapper,
      'code-block__wrapper',
      props.isTheater === true ? 'code-block__wrapper--theater' : '',
    ].join(' ')}
  >
    {props.children}
  </pre>
);

type CodeProps = {
  language?: PrismLanguage;
  showLineNumbers?: boolean;
};

export const Code: React.FC<CodeProps> = props => {
  const codeElementRef = React.useRef<HTMLElement>(null);
  const languageClassName =
    props.language === undefined ? '' : `language-${props.language}`;

  React.useEffect(() => {
    (async () => {
      const Prism = await import('prismjs');
      await loadPrismPlugins();
      if (props.language !== undefined) {
        await loadPrismLanguage(props.language);
      }
      Prism.highlightElement(codeElementRef.current as HTMLElement);
    })().catch(() => false);
  }, [props.language]);

  return (
    <code
      ref={codeElementRef}
      className={[languageClassName, codeBlock.block, 'code-block'].join(' ')}
    >
      {props.children}
    </code>
  );
};

const loadPrismPlugins = async () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  await import('prismjs/plugins/line-numbers/prism-line-numbers');
};

const loadPrismLanguage = async (language: PrismLanguage) => {
  await import(`prismjs/components/prism-${language}`);
};
