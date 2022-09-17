import { gql, TypedDocumentNode } from '@apollo/client';
import { User } from '@lib/schemes/user';
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

// USER
interface AddUserResults {
  userCreateOne?: {
    // TODO: see if I can use Mongoose Generated Schema instead
    record: User;
  };
}

interface AddUserVariables {
  user: User;
}

export const CreateUser: TypedDocumentNode<AddUserResults, AddUserVariables> = gql`
  mutation createUser($user: CreateOneUserInput!) {
    userCreateOne(record: $user) {
      record {
        name
      }
    }
  }
`;
