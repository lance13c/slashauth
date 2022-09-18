import { useQuery } from '@apollo/client';
import { GetFilteredTickets, GetFilteredTicketsVariables } from '@lib/graphql/queries';
import ActionBar from '@ui/ActionBar';
import AddTicketBar from '@ui/AddTicketBar';
import ContentPadding from '@ui/ContentPadding';
import { useFilterContext } from '@ui/context/FilterContext';
import List from '@ui/List';
import ListItem from '@ui/ListItem';
import Main from '@ui/Main';
import PageLayout from '@ui/PageLayout';
import Ticket from '@ui/Ticket';
import { useEffect } from 'react';

export default function Home() {
  const { filterState } = useFilterContext();

  // TODO find better way of distilling the filters
  const filters: GetFilteredTicketsVariables['filters'] = {};
  if (filterState.assigneeId) {
    filters.assigneeId = filterState.assigneeId;
  }

  const { data, error, loading, refetch } = useQuery(GetFilteredTickets, {
    variables: {
      filters: filters,
    },
  });
  const tickets = data?.ticketMany ?? [];

  useEffect(() => {
    refetch();
  }, [filterState]);

  if (error) return <div>Failed to load</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <PageLayout>
      <Main>
        <ContentPadding>
          <div
            style={{
              marginTop: '2rem',
            }}
          ></div>
          <ActionBar />
          {tickets.length > 0 && (
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
          )}

          <AddTicketBar />
        </ContentPadding>
        {/* Adds some padding to bottom of page */}
        <div
          style={{
            height: '40rem',
          }}
        ></div>
      </Main>
    </PageLayout>
  );
}
