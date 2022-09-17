import * as React from 'react';
import styles from './index.module.scss';

interface SumbitButtonProps {
  name?: string;
}

const SumbitButton: React.FunctionComponent<SumbitButtonProps> = ({ name = 'Submit' }) => {
  return (
    <button className={styles.submitButton} type='submit'>
      {name}
    </button>
  );
};

export default SumbitButton;
