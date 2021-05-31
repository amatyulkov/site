import * as React from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import typography from '../typography/typography.module.css';

const Header = () => (
  <header className={[styles.header, typography.typographyRoot].join(' ')}>
    <Link href='/'>Anton Matyulkov</Link>
  </header>
);

export default Header;
