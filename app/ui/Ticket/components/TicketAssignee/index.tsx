import { User } from '@lib/schemes/user';
import Tooltip from '@ui/Tooltip';
import * as React from 'react';
import styles from './index.module.scss';

interface TicketAssigneeProps {
  user: User;
}

const TicketAssignee: React.FunctionComponent<TicketAssigneeProps> = ({ user }) => {
  const [initials, setInitials] = React.useState('');
  const { name } = user;

  React.useEffect(() => {
    const nameList = name.split(' ');
    const tempInitials = nameList
      .map((value) => {
        console.log('value', value);
        return value.at(0);
      })
      .join(',');

    setInitials(tempInitials);
  }, [name]);

  return (
    <div className={styles.assigneeContainer}>
      {/* <AvatarImage /> */}
      {/* <TicketHeader title='Assignee' /> */}
      <Tooltip label={name}>
        <div className={styles.avatar}>
          <p>{initials}</p>
        </div>
      </Tooltip>
    </div>
  );
};

export default TicketAssignee;
