import { User } from '@lib/schemes/user';
import * as React from 'react';
import styles from './index.module.scss';

interface TicketAssigneeProps {
  user: User;
}

const TicketHeader = () => {
  return (
    <h6
      style={{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '0.8rem',
        color: 'grey',
      }}
    >
      Assignee
    </h6>
  );
};

const TicketAssignee: React.FunctionComponent<TicketAssigneeProps> = ({ user }) => {
  const { name } = user;

  console.log('user', user);

  return (
    <div className={styles.assigneeContainer}>
      {/* <AvatarImage /> */}
      <TicketHeader />
      <p className={styles.assigneeName}>{name}</p>
    </div>
  );
};

export default TicketAssignee;
