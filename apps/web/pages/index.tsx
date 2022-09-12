import { useQuery } from '@apollo/client';
import { GetTickets } from '../lib/graphql/queries';

export default function Home() {
  const { data, error } = useQuery(GetTickets);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { tickets } = data;

  console.log('tickets', tickets);

  return (
    <div>
      {/* {users.map((user: any, i: number) => (
        <div key={i}>{user.name}</div>
      ))} */}
      Test
    </div>
  );
}
