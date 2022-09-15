import List from '@ui/List';
import ListItem from '@ui/ListItem';
import * as React from 'react';
import styles from './index.module.scss';

interface ActionBarProps {}

const ActionBar: React.FunctionComponent<ActionBarProps> = () => {
  const handleOnClickCreateTicket = () => {};

  return (
    <List
      style={{
        justifyContent: 'flex-end',
      }}
    >
      <ListItem
        style={{
          width: 'initial',
        }}
      >
        <button onClick={handleOnClickCreateTicket} className={styles.createTicketButton}>
          Create Ticket
        </button>
      </ListItem>
    </List>
  );
};

export default ActionBar;
