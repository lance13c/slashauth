import { gql, TypedDocumentNode } from '@apollo/client';
import { TicketProps } from '../schemes/ticket';

interface AddTicketResults {
  ticketCreateOne?: {
    record: TicketProps;
  };
}

interface AddTicketVariables {
  record: TicketProps;
}

export const AddTicket: TypedDocumentNode<AddTicketResults, AddTicketVariables> = gql`
  mutation AddTicket($record: CreateOneTicketInput!) {
    ticketCreateOne(record: $record) {
      record {
        title
        description
        status
        assignee {
          name
        }
      }
    }
  }
`;
