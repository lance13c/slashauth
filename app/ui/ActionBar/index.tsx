import { useQuery } from '@apollo/client';
import client from '@lib/client/apolloClient';
import { GetAllUsers } from '@lib/graphql/queries';
import { STATUS_OPTIONS } from '@lib/helper/constants';
import Column from '@ui/Column';
import { useFilterContext } from '@ui/context/FilterContext';
import Dropdown, { DropdownOption } from '@ui/Dropdown';
import { listItemVariant } from '@ui/ListItem';
import Row from '@ui/Row';
import UserForm from '@ui/UserForm';
import { motion } from 'framer-motion';
import { useSnackbar } from 'notistack';
import * as React from 'react';
import { StatusType } from 'types';
import styles from './index.module.scss';

interface ActionBarProps {}

const ActionBar: React.FunctionComponent<ActionBarProps> = () => {
  const [isUserFormEnabled, setIsUserFormEnabled] = React.useState(false);
  const { setFilterState } = useFilterContext();

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
    setIsUserFormEnabled(true);
  };

  const handleOnClose = () => {
    setIsUserFormEnabled(false);
  };

  const handleOnComplete = () => {
    enqueueSnackbar('User Successfully Created', {
      variant: 'success',
    });
    setIsUserFormEnabled(false);
  };

  const handleOnUserDropdownChange = async (newValue: DropdownOption) => {
    const userId = newValue?.value;

    setFilterState((preFilter) => {
      return {
        ...preFilter,
        assigneeId: userId,
      };
    });

    await client.refetchQueries({
      include: ['GetFilteredTickets'],
    });
  };

  const handleOnStatusDropdownChange = async (newValue: DropdownOption) => {
    // TODO: find alternative to casting
    const status = newValue?.value as StatusType;

    setFilterState((preFilter) => {
      return {
        ...preFilter,
        status: status,
      };
    });

    await client.refetchQueries({
      include: ['GetFilteredTickets'],
    });
  };

  return (
    <Row
      style={{
        justifyContent: 'space-between',
      }}
    >
      <Column>
        {!isUserFormEnabled && (
          <motion.button
            variants={listItemVariant}
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
        {isUserFormEnabled && <UserForm onComplete={handleOnComplete} />}
      </Column>
      <Row>
        <Dropdown
          id='user-dropdown'
          placeholder='Filter By User'
          name='user-dropdown'
          options={userOptions}
          onChange={handleOnUserDropdownChange}
        />
        <Dropdown
          id='status-dropdown'
          placeholder='Filter By Status'
          name='status-dropdown'
          options={STATUS_OPTIONS}
          onChange={handleOnStatusDropdownChange}
        />
      </Row>
    </Row>
  );
};

export default ActionBar;
