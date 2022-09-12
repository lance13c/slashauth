import { gql } from '@apollo/client';

export const GetTickets = gql`
  query GetTickets {
    ticketMany {
      title
      description
      status
      assignee {
        name
        avatarUrl
      }
      _id
    }
  }
`;
