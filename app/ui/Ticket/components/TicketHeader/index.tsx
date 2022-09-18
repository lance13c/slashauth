import * as React from 'react';

interface TicketHeaderProps {
  title: string;
}

const TicketHeader: React.FunctionComponent<TicketHeaderProps> = ({ title }) => {
  return (
    <h6
      style={{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '0.8rem',
        color: 'grey',
        margin: 0,
      }}
    >
      {title}
    </h6>
  );
};

export default TicketHeader;
