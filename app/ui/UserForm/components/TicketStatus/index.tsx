import * as React from 'react';
import styles from './index.module.scss';

interface TicketStatusProps {
  status: string;
}

const TicketStatus: React.FunctionComponent<TicketStatusProps> = ({ status }) => {
  return (
    <div className={styles.statusContainer}>
      <p className={styles.statusText}>{status}</p>
    </div>
  );
};

export default TicketStatus;
