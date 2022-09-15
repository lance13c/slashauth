import { User } from '@lib/schemes/user';
import * as React from 'react';
import styles from './index.module.scss';

interface TicketAssigneeProps {
  user: User;
}

const TicketAssignee: React.FunctionComponent<TicketAssigneeProps> = ({ user }) => {
  const { name } = user;

  return (
    <div className={styles.assigneeContainer}>
      {/* <AvatarImage /> */}
      <p className={styles.assigneeName}>{name}</p>
    </div>
  );
};

export default TicketAssignee;
