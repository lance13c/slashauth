import Column from '@ui/Column';
import List from '@ui/List';
import TicketForm from '@ui/TicketForm';
import { useSnackbar } from 'notistack';
import * as React from 'react';
import styles from './index.module.scss';

interface AddTicketBarProps {}

const AddTicketBar: React.FunctionComponent<AddTicketBarProps> = () => {
  const [isTicketFormEnabled, setIsTicketFormEnabled] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleOnClickCreateTicket = () => {
    setIsTicketFormEnabled(true);
  };

  const handleOnClose = () => {
    setIsTicketFormEnabled(false);
  };

  const handleOnComplete = () => {
    enqueueSnackbar('Ticket Successfully Created', {
      variant: 'success',
    });
    setIsTicketFormEnabled(false);
  };

  return (
    <Column>
      {!isTicketFormEnabled && (
        <button onClick={handleOnClickCreateTicket} className={styles.createTicketButton}>
          Create Ticket
        </button>
      )}
      {isTicketFormEnabled && (
        <>
          <List id='create-ticket-list-item'>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <button className={styles.closeButton} onClick={handleOnClose}>
                Close
              </button>
            </div>
          </List>
          <TicketForm onComplete={handleOnComplete} />
        </>
      )}
    </Column>
  );
};

export default AddTicketBar;
