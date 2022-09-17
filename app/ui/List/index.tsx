import { motion } from 'framer-motion';
import React from 'react';
import styles from './index.module.scss';
interface ListProps {
  children: React.ReactElement | React.ReactElement[];
  style?: React.CSSProperties;
}

const listVariants = {
  hidden: {},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const List: React.FunctionComponent<ListProps> = (props) => {
  const { children, style = {} } = props;
  return (
    <motion.ul variants={listVariants} initial='hidden' animate='show' style={style} className={styles.list}>
      {children}
    </motion.ul>
  );
};

export default List;
