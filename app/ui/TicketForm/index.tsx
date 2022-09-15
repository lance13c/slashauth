import { useMutation } from '@apollo/client';
import { AddTicket } from '@lib/graphql/mutations';
import { TicketProps } from '@lib/schemes/ticket';
import List from '@ui/List';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './index.module.scss';

interface TicketFormProps {
  onComplete: () => void;
}

interface Input extends Omit<TicketProps, 'assignee'> {
  assigneeId: string;
}

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

  if (error) {
    console.error(error);
  }

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);

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
        <input name='title' autoFocus defaultValue='' {...register('title')} />
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
      </List>
      <List
        style={{
          flexDirection: 'column',
          width: 'initial',
          padding: 0,
        }}
      >
        <label htmlFor='status'>Status</label>
        <select name='status' {...register('status')}>
          <option value='BACKLOG'>BACKLOG</option>
          <option value='IN_PROGRESS'>IN_PROGRESS</option>
          <option value='COMPLETED'>COMPLETED</option>
          <option value='BLOCKED'>BLOCKED</option>
        </select>
      </List>
      <List
        style={{
          flexDirection: 'column',
          width: 'initial',
          padding: 0,
        }}
      >
        <label htmlFor='assigneeId'>Assignee</label>
        <input name='assigneeId' defaultValue='' {...register('assigneeId')} />
      </List>

      {errors.title && <span>The title is a required field</span>}
      <input type='submit' />
    </form>
  );
};

export default TicketForm;
