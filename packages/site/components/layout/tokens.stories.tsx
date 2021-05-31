import * as React from 'react';

export default {
  title: 'Layout',
};

type CssTokenMeta = {
  name: string;
  css: string;
};

const paddingTokens: CssTokenMeta[] = [
  { name: 'Padding XS', css: 'var(--padding-xs)' },
  { name: 'Padding S', css: 'var(--padding-s)' },
  { name: 'Padding M', css: 'var(--padding-m)' },
  { name: 'Padding L', css: 'var(--padding-l)' },
  { name: 'Padding XL', css: 'var(--padding-xl)' },
];

export const Tokens = () => {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {paddingTokens.map(token => (
        <figure
          key={token.name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: 0,
          }}
        >
          <div style={{ marginTop: 'auto' }}>
            <div
              className={'test'}
              style={{
                width: token.css,
                height: token.css,
                backgroundColor: '#e91e63',
                borderRadius: '2px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 'auto',
              }}
            ></div>
          </div>
          <figcaption style={{ marginTop: 'auto' }}>{token.name}</figcaption>
        </figure>
      ))}
    </section>
  );
};
