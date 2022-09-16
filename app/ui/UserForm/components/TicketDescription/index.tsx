import * as React from 'react';
import styles from './index.module.scss';

interface TicketDescriptionProps {
  description: string;
}

const TicketDescription: React.FunctionComponent<TicketDescriptionProps> = ({ description }) => {
  return (
    <div className={styles.descriptionContainer}>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default TicketDescription;
