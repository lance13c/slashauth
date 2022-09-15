import { useQuery } from '@apollo/client';
import { GetTickets } from '@lib/graphql/queries';
import List from '@ui/List';
import ListItem from '@ui/ListItem';
import PageLayout from '@ui/PageLayout';
import Ticket from '@ui/Ticket';

export default function Home() {
  const { data, error } = useQuery(GetTickets);
  const tickets = data?.ticketMany ?? [];

  if (error) return <div>Failed to load</div>;
  if (tickets.length < 1) return <div>Loading...</div>;

  return (
    <PageLayout>
      <List>
        {tickets.map((ticket) => (
          <ListItem key={ticket._id + ticket.title}>
            <Ticket {...ticket} />
          </ListItem>
        ))}
      </List>
    </PageLayout>
  );
}
