import { useMutation } from '@apollo/client';
import { CreateUser } from '@lib/graphql/mutations';
import { User } from '@lib/schemes/user';
import SubmitButton from '@ui/buttons/SubmitButton';
import List from '@ui/List';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './index.module.scss';

interface UserFormProps {
  onComplete?: () => void;
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

const UserForm: React.FunctionComponent<UserFormProps> = ({ onComplete }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>();

  const [addUser, error] = useMutation(CreateUser, {
    refetchQueries: ['GetTickets'],
    onCompleted: () => {
      if (onComplete) {
        onComplete();
      }
    },
  });

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.warn(Object.values(errors));
    const hasErrors = Object.values(errors).length > 0;

    if (hasErrors) return;

    addUser({
      variables: {
        user: {
          name: data.name,
        },
      },
    });
  };

  console.log(errors);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <section
      style={{
        border: '2px solid black',
        padding: '1rem',

        width: '100%',
      }}
    >
      <h3
        style={{
          marginBottom: '0',
        }}
      >
        Create User
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.userForm}>
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
        <SubmitButton />
      </form>
    </section>
  );
};

export default UserForm;
