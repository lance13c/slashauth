import { MongooseTicket } from '@lib/schemes/ticket';
import TicketTitle from './components/TicketTitle';
import styles from './index.module.scss';

interface TicketProps extends MongooseTicket {}

const Ticket: React.FunctionComponent<TicketProps> = ({ _id, title, description, status, assignee }) => {
  return (
    <div key={_id} className={styles.title}>
      <TicketTitle title={title} />
      <p>{description}</p>
      <p>{status}</p>
      <div>
        <h6>Assignee</h6>
        <p>{assignee.name}</p>
      </div>
    </div>
  );
};

export default Ticket;
