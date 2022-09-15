import * as React from 'react';
import styles from './index.module.scss';

interface TicketTitleProps {
  title: string;
}

const TicketTitle: React.FunctionComponent<TicketTitleProps> = ({ title }) => {
  return (
    <div className={styles.titleContainer}>
      <p className={styles.titleText}>{title}</p>
    </div>
  );
};

export default TicketTitle;
