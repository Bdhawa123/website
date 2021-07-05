import React, { createContext, useState } from "react";

export const BackgroundContext = createContext();

const BackgroundContextProvider = (props) =>{

  const [activePage,setActivePage]= useState('main');

  const setCurrentPage=(page)=>{
    setActivePage(page);
  }

  return(
    <BackgroundContext.Provider value={{activePage,setCurrentPage}}>
      {props.children}
    </BackgroundContext.Provider>
  )
}

export default BackgroundContextProvider;



// const ContextConsumerWrapper = (WrappedComponent, Context) => {
//   return (
//     <Context.Consumer>
//       {(context) => <WrappedComponent context={context} />}
//     </Context.Consumer>
//   );
// };

// const BackgroundProvider = ({ children }) => {
//   state = {
//     activePage: "main",
//   };

//   togglePage = (Page) => {
//     this.setState({ activePage: Page });
//   };

//   return (
//     <BackgroundState.Provider
//       value={{ togglePage: this.togglePage, active: this.state.activePage }}
//     >
//       {children}
//     </BackgroundState.Provider>
//   );
// };

// export { BackgroundProvider };
