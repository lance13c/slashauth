import * as React from 'react';
import styles from './index.module.scss';

interface ColumnProps {
  style?: React.CSSProperties;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
}

const Column: React.FunctionComponent<ColumnProps> = ({ style = {}, children }) => {
  return (
    <div style={style} className={styles.column}>
      {children}
    </div>
  );
};

export default Column;
