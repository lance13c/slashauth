import List from '@ui/List';
import ListItem from '@ui/ListItem';
import TicketForm from '@ui/TicketForm';
import * as React from 'react';
import styles from './index.module.scss';

interface AddTicketBarProps {}

const AddTicketBar: React.FunctionComponent<AddTicketBarProps> = () => {
  const [isTicketFormEnabled, setIsTicketFormEnabled] = React.useState(false);

  const handleOnClickCreateTicket = () => {
    setIsTicketFormEnabled(true);
  };

  const handleOnClose = () => {
    setIsTicketFormEnabled(false);
  };

  return (
    <List>
      {!isTicketFormEnabled && (
        <ListItem>
          <button onClick={handleOnClickCreateTicket} className={styles.createTicketButton}>
            Create Ticket
          </button>
        </ListItem>
      )}
      {isTicketFormEnabled && (
        <>
          <List>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <button className={styles.closeButton} onClick={handleOnClose}>
                X
              </button>
            </div>

            <ListItem>
              <TicketForm onComplete={handleOnClose} />
            </ListItem>
          </List>
        </>
      )}
    </List>
  );
};

export default AddTicketBar;
