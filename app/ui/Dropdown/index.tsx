import React from 'react';
import Select, { ActionMeta, GroupBase, OptionsOrGroups } from 'react-select';
import styles from './index.module.scss';

export interface DropdownOption {
  value?: string | null;
  label: string;
}
interface DropdownProps {
  name: string;
  options: OptionsOrGroups<DropdownOption, GroupBase<DropdownOption>>;
  isLoading?: boolean;
  isDisabled?: boolean;
  isRtl?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  onChange?: (newValue: DropdownOption, actionMeta: ActionMeta<DropdownOption>) => void;
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({
  name,
  options,
  isClearable = true,
  isDisabled = false,
  isLoading = false,
  isRtl = false,
  isSearchable = true,
  onChange,
}) => {
  return (
    <Select
      className={styles.dropdown}
      classNamePrefix='slashauth'
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isRtl={isRtl}
      isSearchable={isSearchable}
      name={name}
      options={options}
      onChange={onChange}
    />
  );
};

export default Dropdown;
