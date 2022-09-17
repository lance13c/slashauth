import { motion } from 'framer-motion';
import React from 'react';
import styles from './index.module.scss';

interface ListItemProps {
  children: React.ReactElement | React.ReactElement[];
  style?: React.CSSProperties;
}

const listItemVariant = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
};

const ListItem: React.FunctionComponent<ListItemProps> = ({ children, style = {} }) => {
  return (
    <motion.li variants={listItemVariant} style={style} className={styles.list}>
      {children}
    </motion.li>
  );
};

export default ListItem;
