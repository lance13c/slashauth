import * as React from 'react';
import styles from './index.module.scss';

interface PageLayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const PageLayout: React.FunctionComponent<PageLayoutProps> = ({ children }) => {
  return <section className={styles.pageLayout}>{children}</section>;
};

export default PageLayout;
