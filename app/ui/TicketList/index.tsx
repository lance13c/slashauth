import { useQuery } from '@apollo/client';
import { GetFilteredTickets, GetFilteredTicketsVariables } from '@lib/graphql/queries';
import AddTicketBar from '@ui/AddTicketBar';
import { useFilterContext } from '@ui/context/FilterContext';
import List from '@ui/List';
import ListItem from '@ui/ListItem';
import Ticket from '@ui/Ticket';
import * as React from 'react';

interface TicketListProps {}

const TicketList: React.FunctionComponent<TicketListProps> = () => {
  const { filterState } = useFilterContext();

  // TODO find better way of distilling the filters
  const filters: GetFilteredTicketsVariables['filters'] = {};
  if (filterState.assigneeId) {
    filters.assigneeId = filterState.assigneeId;
  }
  if (filterState.status) {
    filters.status = filterState.status;
  }

  const { data, error, loading, refetch } = useQuery(GetFilteredTickets, {
    variables: {
      filters: filters,
    },
  });
  const tickets = data?.ticketMany ?? [];

  React.useEffect(() => {
    refetch();
  }, [filterState]);

  if (error) {
    console.error(error);
    return <div>Failed to load</div>;
  }
  if (loading) return <div>Loading...</div>;

  return (
    <>
      {tickets.length > 0 ? (
        <List
          id='ticket-list'
          style={{
            flexDirection: 'column',
          }}
        >
          <>
            {tickets.map((ticket) => (
              <ListItem id={ticket._id} key={ticket._id}>
                <Ticket {...ticket} />
              </ListItem>
            ))}
            <ListItem id='ticket-list-action-bar-list-item'>
              <AddTicketBar />
            </ListItem>
          </>
        </List>
      ) : (
        <>
          <div>No Tickets Available</div>
          <AddTicketBar />
        </>
      )}
    </>
  );
};

export default TicketList;
