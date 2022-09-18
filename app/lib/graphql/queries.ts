import { gql, TypedDocumentNode } from '@apollo/client';
import { UserDocument } from '@lib/schemes/user';
import { MongooseTicket } from '../schemes/ticket';

interface GetTicketsResults {
  ticketMany?: MongooseTicket[];
}

export const GetTickets: TypedDocumentNode<GetTicketsResults> = gql`
  query GetTickets {
    ticketMany {
      _id
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
      _id
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

interface GetAllUsersResults {
  userMany?: UserDocument[];
}

export const GetAllUsers: TypedDocumentNode<GetAllUsersResults> = gql`
  query GetAllUsers {
    userMany {
      avatarUrl
      name
      _id
    }
  }
`;

export interface GetFilteredTicketsVariables {
  filters?: {
    assigneeId?: string;
  };
}
interface GetFilteredTicketsResults {
  ticketMany?: MongooseTicket[];
}

export const GetFilteredTickets: TypedDocumentNode<GetFilteredTicketsResults, GetFilteredTicketsVariables> = gql`
  query GetFilteredTickets($filters: FilterFindManyTicketInput) {
    ticketMany(filter: $filters) {
      _id
      title
      description
      status
      assigneeId
      assignee {
        _id
        name
        avatarUrl
      }
    }
  }
`;
