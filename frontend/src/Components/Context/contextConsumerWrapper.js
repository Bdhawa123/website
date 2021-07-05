export const ContextConsumerWrapper = (WrappedComponent, Context) => {
  return (
    <Context.Consumer>
      {(context) => <WrappedComponent context={context} />}
    </Context.Consumer>
  );
};
