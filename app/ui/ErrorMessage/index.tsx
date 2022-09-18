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

export default ErrorMessage;
