import React from 'react';
import Select, { GroupBase, OptionsOrGroups } from 'react-select';
import styles from './index.module.scss';
interface DropdownProps {
  name: string;
  options: OptionsOrGroups<unknown, GroupBase<unknown>>;
  isLoading?: boolean;
  isDisabled?: boolean;
  isRtl?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({
  name,
  options,
  isClearable = true,
  isDisabled = false,
  isLoading = false,
  isRtl = false,
  isSearchable = true,
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
    />
  );
};

export default Dropdown;
