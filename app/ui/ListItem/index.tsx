import React from 'react';
import styles from './index.module.scss';

interface ListItemProps {
  children: React.ReactElement | React.ReactElement[];
}

const ListItem: React.FunctionComponent<ListItemProps> = ({ children }) => {
  return <li className={styles.list}>{children}</li>;
};

export default ListItem;
