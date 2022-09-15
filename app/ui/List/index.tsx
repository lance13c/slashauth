import React from 'react';
import styles from './index.module.scss';
interface ListProps {
  children: React.ReactElement | React.ReactElement[];
  style?: React.CSSProperties;
}

const List: React.FunctionComponent<ListProps> = (props) => {
  const { children, style = {} } = props;
  return (
    <ul style={style} className={styles.list}>
      {children}
    </ul>
  );
};

export default List;
