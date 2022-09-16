import { gql, TypedDocumentNode } from '@apollo/client';
import { MongooseTicket } from '../schemes/ticket';

interface GetTicketsResults {
  ticketMany?: MongooseTicket[];
}

export const GetTickets: TypedDocumentNode<GetTicketsResults> = gql`
  query GetTickets {
    ticketMany {
      title
      description
      status
      assignee {
        name
        avatarUrl
      }
    }
  }
`;

export const GetTicketsByAssignee: TypedDocumentNode<GetTicketsResults> = gql`
  query GetTickets {
    ticketMany {
      title
      description
      status
      assignee {
        name
        avatarUrl
      }
    }
  }
`;
