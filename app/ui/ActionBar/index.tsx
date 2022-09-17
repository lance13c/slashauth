import { useQuery } from '@apollo/client';
import { GetAllUsers } from '@lib/graphql/queries';
import { useFilterContext } from '@ui/context/FilterContext';
import Dropdown from '@ui/Dropdown';
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
  const { filterState, setFilterState } = useFilterContext();

  const { data: userData } = useQuery(GetAllUsers, {
    fetchPolicy: 'no-cache',
  });
  const users = userData?.userMany ?? [];
  const userOptions = users.map((user) => {
    return {
      label: user.name,
      value: user._id,
    };
  });

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

  const handleOnFilterChange = () => {
    setFilterState((preFilter) => {
      return {
        ...preFilter,
        // Add other filters
      };
    });
  };

  const handleOnUserDropdownChange = (newValue: unknown) => {
    if (typeof newValue !== 'string') {
      console.error('dropdown value was detected as not a string');
      return;
    }

    const userId = newValue as string;

    setFilterState((preFilter) => {
      return {
        ...preFilter,
        assigneeId: userId,
      };
    });
  };

  return (
    <List>
      <ListItem>
        {!isUserFormEnabled && (
          <motion.button
            layoutId='action-bar-user-primary'
            onClick={handleOnClickCreateTicket}
            className={styles.createUserButton}
          >
            Create User
          </motion.button>
        )}
        {isUserFormEnabled && (
          <motion.button layoutId='action-bar-user-primary' onClick={handleOnClose} className={styles.createUserButton}>
            Close
          </motion.button>
        )}
      </ListItem>
      <Dropdown name='user-dropdown' options={userOptions} onChange={handleOnUserDropdownChange} />

      {isUserFormEnabled && (
        <>
          <List>
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
