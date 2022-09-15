import React from 'react';
import styles from './index.module.scss';

interface ListProps {
  children: React.ReactElement | React.ReactElement[];
}

const List: React.FunctionComponent<ListProps> = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default List;
