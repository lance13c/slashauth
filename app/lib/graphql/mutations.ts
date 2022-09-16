import { gql, TypedDocumentNode } from '@apollo/client';
import { UserScheme } from '@lib/schemes/user';
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
interface AddTicketResults {
  userCreateOne?: {
    record: typeof UserScheme;
  };
}

interface AddTicketVariables {
  user: typeof UserScheme;
}

export const CreateUser: TypedDocumentNode<AddTicketResults, AddTicketVariables> = gql`
  mutation createUser($user: CreateOneUserInput!) {
    userCreateOne(record: $user) {
      record {
        name
      }
    }
  }
`;
