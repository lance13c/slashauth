import React from 'react';
import styles from './index.module.scss';

interface ListItemProps {
  children: React.ReactElement | React.ReactElement[];
  style?: React.CSSProperties;
}

const ListItem: React.FunctionComponent<ListItemProps> = ({ children, style = {} }) => {
  return (
    <li style={style} className={styles.list}>
      {children}
    </li>
  );
};

export default ListItem;
