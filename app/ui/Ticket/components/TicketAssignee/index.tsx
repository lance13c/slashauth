import { User } from '@lib/schemes/user';
import Column from '@ui/Column';
import Tooltip from '@ui/Tooltip';
import * as React from 'react';
import TicketHeader from '../TicketHeader';
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
        return value.at(0);
      })
      .join(' ')
      .slice(0, 3);

    setInitials(tempInitials);
  }, [name]);

  return (
    <Column>
      {/* <AvatarImage /> */}
      <TicketHeader title='Assignee' />
      <Tooltip label={name}>
        <div className={styles.avatar}>
          <p>{initials}</p>
        </div>
      </Tooltip>
    </Column>
  );
};

export default TicketAssignee;
