import '../components/layout/layout.global.css';
import '../components/layout/tokens.global.css';
import '../components/typography/typography.global.css';
import '../components/theme.global.css';
import '../components/code-block.global.css';
import Header from '@/components/header/header';
import { getPublicRuntimeConfig } from '@/environment';
import { Baseline } from '@/components/layout/baseline';

export default function App({ Component, pageProps }) {
  const config = getPublicRuntimeConfig();

  return (
    <>
      {config.SHOW_GRIDS ? (
        <Baseline lineHeight={24} opacity={0.1}>
          <Header />
          <Component {...pageProps} />
        </Baseline>
      ) : (
        <>
          <Header />
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}
