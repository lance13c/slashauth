import Column from '@ui/Column';
import * as React from 'react';
import TicketHeader from '../TicketHeader';
import styles from './index.module.scss';

interface TicketStatusProps {
  status: string;
}

const TicketStatus: React.FunctionComponent<TicketStatusProps> = ({ status }) => {
  return (
    <Column>
      <TicketHeader title='Status' />
      <p className={styles.statusText}>{status}</p>
    </Column>
  );
};

export default TicketStatus;
