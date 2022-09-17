import { MongooseTicket } from '@lib/schemes/ticket';
import TicketAssignee from './components/TicketAssignee';
import TicketDescription from './components/TicketDescription';
import TicketStatus from './components/TicketStatus';
import TicketTitle from './components/TicketTitle';
import styles from './index.module.scss';

interface TicketProps extends MongooseTicket {}

const Ticket: React.FunctionComponent<TicketProps> = ({ _id, title, description, status, assignee }) => {
  return (
    <div className={styles.ticket}>
      <div>
        <TicketTitle title={title} />
        <div style={{ height: '0.5rem' }}></div>
        <TicketDescription description={description} />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <TicketStatus status={status} />
        <TicketAssignee user={assignee} />
      </div>
    </div>
  );
};

export default Ticket;
