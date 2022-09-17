import List from '@ui/List';
import ListItem from '@ui/ListItem';
import UserForm from '@ui/UserForm';
import { motion } from 'framer-motion';
import { useSnackbar } from 'notistack';
import * as React from 'react';
import styles from './index.module.scss';

interface ActionBarProps {}

const ActionBar: React.FunctionComponent<ActionBarProps> = () => {
  const [isUserFormEnabled, setIsTicketFormEnabled] = React.useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleOnClickCreateTicket = () => {
    setIsTicketFormEnabled(true);
  };

  const handleOnClose = () => {
    setIsTicketFormEnabled(false);
  };

  const handleOnComplete = () => {
    enqueueSnackbar('User Successfully Created', {
      variant: 'success',
    });
  };

  return (
    <List>
      <ListItem>
        {isUserFormEnabled && (
          <motion.button
            layoutId='action-bar-user-primary'
            onClick={handleOnClickCreateTicket}
            className={styles.createUserButton}
          >
            Create User
          </motion.button>
        )}
        {!isUserFormEnabled && (
          <motion.button layoutId='action-bar-user-primary' onClick={handleOnClose} className={styles.createUserButton}>
            Close
          </motion.button>
        )}
      </ListItem>
      {isUserFormEnabled && (
        <>
          <List>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            ></motion.div>

            <ListItem>
              <UserForm onComplete={handleOnComplete} />
            </ListItem>
          </List>
        </>
      )}
    </List>
  );
};

export default ActionBar;
