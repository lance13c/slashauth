import { useMutation, useQuery } from '@apollo/client';
import { AddTicket } from '@lib/graphql/mutations';
import { GetAllUsers } from '@lib/graphql/queries';
import { TicketProps } from '@lib/schemes/ticket';
import List from '@ui/List';
import { SubmitHandler, useForm } from 'react-hook-form';
import TicketAssignee from './components/TicketAssignee';
import styles from './index.module.scss';

interface TicketFormProps {
  onComplete: () => void;
}

interface Input extends Omit<TicketProps, 'assignee'> {
  assigneeId: string;
}

const ErrorMessage = ({ children }) => {
  return (
    <p
      style={{
        color: 'darkred',
      }}
    >
      {children}
    </p>
  );
};

// TODO: Simplify this file
const TicketForm: React.FunctionComponent<TicketFormProps> = ({ onComplete }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>();

  const [addTicket, error] = useMutation(AddTicket, {
    refetchQueries: ['GetTickets'],
    onCompleted: () => {
      onComplete();
    },
  });

  const { data: userData } = useQuery(GetAllUsers, {
    fetchPolicy: 'no-cache',
  });
  const users = userData?.userMany || [];

  const onSubmit: SubmitHandler<Input> = (data) => {
    const hasErrors = Object.values(errors).length > 0;
    if (hasErrors) return;

    addTicket({
      variables: {
        record: {
          title: data.title,
          description: data.description,
          status: data.status,
          assignee: {
            name: data.assigneeId,
          },
        },
      },
    });
  };

  console.log(errors);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className={styles.ticketForm}>
      {/* register your input into the hook by invoking the "register" function */}
      <List
        style={{
          flexDirection: 'column',
          width: 'initial',
          padding: 0,
        }}
      >
        <label htmlFor='title'>Title</label>
        <input name='title' autoFocus defaultValue='' required {...register('title', { required: true })} />
        {errors?.title?.message && <ErrorMessage>{errors.title.message}</ErrorMessage>}
      </List>
      <List
        style={{
          flexDirection: 'column',
          width: 'initial',
          padding: 0,
        }}
      >
        <label htmlFor='description'>Description</label>
        <input name='description' defaultValue='' {...register('description')} />
        {errors?.description?.message && <p>{errors.description.message}</p>}
      </List>
      <List
        style={{
          flexDirection: 'column',
          width: 'initial',
          padding: 0,
        }}
      >
        <label htmlFor='status'>Status</label>
        <select name='status' {...register('status')} defaultValue='BACKLOG'>
          <option value='BACKLOG'>BACKLOG</option>
          <option value='IN_PROGRESS'>IN_PROGRESS</option>
          <option value='COMPLETED'>COMPLETED</option>
          <option value='BLOCKED'>BLOCKED</option>
        </select>
        {errors?.status?.message && <p>{errors.status.message}</p>}
      </List>
      <List
        style={{
          flexDirection: 'column',
          width: 'initial',
          padding: 0,
        }}
      >
        <label htmlFor='assigneeId'>Assignee</label>
        {errors?.assigneeId?.message && <p>{errors.assigneeId.message}</p>}
        <select name='assigneeId' {...register('assigneeId')}>
          {/* <option value='BACKLOG'>BACKLOG</option>
          <option value='IN_PROGRESS'>IN_PROGRESS</option>
          <option value='COMPLETED'>COMPLETED</option>
          <option value='BLOCKED'>BLOCKED</option> */}
          {users.map((user) => {
            return (
              <option key={user?._id} value={user.name}>
                <TicketAssignee user={user} />
              </option>
            );
          })}
        </select>
      </List>

      <input type='submit' />
    </form>
  );
};

export default TicketForm;
