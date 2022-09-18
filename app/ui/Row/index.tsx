import * as React from 'react';
import styles from './index.module.scss';

interface RowProps {
  style?: React.CSSProperties;
  children?: React.ReactElement | React.ReactElement[];
}

const Row: React.FunctionComponent<RowProps> = ({ style = {}, children }) => {
  return (
    <div style={style} className={styles.row}>
      {children}
    </div>
  );
};

export default Row;
