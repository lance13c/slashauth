import { motion } from 'framer-motion';
import React from 'react';
import styles from './index.module.scss';

interface ListItemProps {
  children: React.ReactElement | React.ReactElement[];
  style?: React.CSSProperties;
  id: string;
}

const listItemVariant = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  exit: { duration: 4, opacity: 0 },
};

const ListItem: React.FunctionComponent<ListItemProps> = ({ children, style = {}, id }) => {
  return (
    <motion.li layoutId={id} variants={listItemVariant} style={style} className={styles.list}>
      {children}
    </motion.li>
  );
};

export default React.memo(ListItem);
