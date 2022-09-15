import React from 'react';
import styles from './index.module.scss';

interface MainProps {
  children: React.ReactElement | React.ReactElement[];
}

const Main: React.FunctionComponent<MainProps> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
