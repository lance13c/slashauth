import { useQuery } from '@apollo/client';
import Ticket from '@ui/Ticket';
import { GetTickets } from '../lib/graphql/queries';

export default function Home() {
  const { data, error } = useQuery(GetTickets);
  const tickets = data?.ticketMany ?? [];

  if (error) return <div>Failed to load</div>;
  if (tickets.length < 1) return <div>Loading...</div>;

  return (
    <div>
      {tickets.map((ticket) => (
        <Ticket key={ticket._id} {...ticket} />
      ))}
    </div>
  );
}
