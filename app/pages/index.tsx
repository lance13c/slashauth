import { useQuery } from '@apollo/client';
import { GetTickets } from '@lib/graphql/queries';
import ActionBar from '@ui/ActionBar';
import ContentPadding from '@ui/ContentPadding';
import List from '@ui/List';
import ListItem from '@ui/ListItem';
import Main from '@ui/Main';
import PageLayout from '@ui/PageLayout';
import Ticket from '@ui/Ticket';
import UserForm from '@ui/UserForm';
import { useSnackbar } from 'notistack';

export default function Home() {
  const { data, error, loading } = useQuery(GetTickets);
  const { enqueueSnackbar } = useSnackbar();
  const tickets = data?.ticketMany ?? [];

  if (error) return <div>Failed to load</div>;
  if (loading) return <div>Loading...</div>;

  const handleOnComplete = () => {
    enqueueSnackbar('User Successfully Created', {
      variant: 'success',
    });
  };

  return (
    <PageLayout>
      <Main>
        <ContentPadding>
          <div
            style={{
              marginTop: '2rem',
            }}
          ></div>
          <UserForm onComplete={handleOnComplete} />
          <List
            style={{
              flexDirection: 'column',
            }}
          >
            {tickets.map((ticket) => (
              <ListItem key={ticket._id + ticket.title}>
                <Ticket {...ticket} />
              </ListItem>
            ))}
          </List>
          <ActionBar />
        </ContentPadding>
      </Main>
    </PageLayout>
  );
}
