const contextProviderWrapper = (WrappedComponent, Context, initialContext) => {
  let state = { ...initialContext };

  const changeContext = (Page) => {
    this.setState({ active: Page });
  };

  return (
    <Context.Provider value={{ ...state, changePage: changeContext }}>
      <WrappedComponent />
    </Context.Provider>
  );
};

export default contextProviderWrapper;
