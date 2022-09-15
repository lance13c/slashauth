import { useQuery } from '@apollo/client';
import { GetTickets } from '@lib/graphql/queries';
import ContentPadding from '@ui/ContentPadding';
import List from '@ui/List';
import ListItem from '@ui/ListItem';
import Main from '@ui/Main';
import PageLayout from '@ui/PageLayout';
import Ticket from '@ui/Ticket';

export default function Home() {
  const { data, error } = useQuery(GetTickets);
  const tickets = data?.ticketMany ?? [];

  if (error) return <div>Failed to load</div>;
  if (tickets.length < 1) return <div>Loading...</div>;

  return (
    <PageLayout>
      <Main>
        <ContentPadding>
          <List>
            {tickets.map((ticket) => (
              <ListItem key={ticket._id + ticket.title}>
                <Ticket {...ticket} />
              </ListItem>
            ))}
          </List>
        </ContentPadding>
      </Main>
    </PageLayout>
  );
}
