import { User } from '@lib/schemes/user';
import List from '@ui/List';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './index.module.scss';

interface TicketFormProps {
  onComplete: () => void;
}

interface Input extends User {}

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

const TicketForm: React.FunctionComponent<TicketFormProps> = ({ onComplete }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>();

  // const [addTicket, error] = useMutation(AddTicket, {
  //   refetchQueries: ['GetTickets'],
  //   onCompleted: () => {
  //     onComplete();
  //   },
  // });

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    console.warn(Object.values(errors));
    const hasErrors = Object.values(errors).length > 0;

    if (hasErrors) return;
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
        <label htmlFor='name'>Name</label>
        <input name='name' autoFocus defaultValue='' required {...register('name', { required: true })} />
        {errors?.name?.message && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </List>
      <input type='submit' />
    </form>
  );
};

export default TicketForm;
