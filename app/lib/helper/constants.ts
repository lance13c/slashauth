import { DropdownOption } from '@ui/Dropdown';
import memoize from 'lodash/memoize';

export const STATUS_TYPES = ['BACKLOG', 'IN_PROGRESS', 'COMPLETED', 'BLOCKED'];

const getStatusOptions: () => DropdownOption[] = memoize(() => {
  const statuses = STATUS_TYPES.map<DropdownOption>((status) => {
    return {
      value: status,
      label: status,
    };
  });

  return statuses;
});

// Dynamically creates an options data object out of a list of statuses
export const STATUS_OPTIONS: DropdownOption[] = getStatusOptions();
