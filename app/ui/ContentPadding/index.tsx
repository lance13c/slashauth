import * as React from 'react';
import styles from './index.module.scss';

interface ContentPaddingProps {
  children: React.ReactElement | React.ReactElement[];
}

const ContentPadding: React.FunctionComponent<ContentPaddingProps> = ({ children }) => {
  return <div className={styles.contentPadding}>{children}</div>;
};

export default ContentPadding;
