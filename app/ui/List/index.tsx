import { motion } from 'framer-motion';
import React from 'react';
import styles from './index.module.scss';
interface ListProps {
  children: React.ReactElement | React.ReactElement[];
  style?: React.CSSProperties;
  id: string;
}

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {},
};

const List: React.FunctionComponent<ListProps> = (props) => {
  const { children, style = {}, id } = props;
  return (
    <motion.ul
      layoutId={id}
      // key={id}
      variants={listVariants}
      initial='hidden'
      animate='show'
      exit='exit'
      style={style}
      className={styles.list}
    >
      {children}
    </motion.ul>
  );
};

export default List;
