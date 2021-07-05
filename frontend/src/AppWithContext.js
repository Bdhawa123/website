// import { ContextConsumerWrapper } from "./Components/Context/contextConsumerWrapper";
// import { contextProviderWrapper } from "./Components/Context/contextProviderWrapper";
// import React, { createContext, Component } from "react";
import BackgroundContextProvider from "./Components/Context/BackgroundContext";
import App from "./App";

// const initialContext = { active: "mainPage" };
// const BackgroundContext = createContext(initialContext);

const AppWithContext = ()=>{
  return(
    <BackgroundContextProvider>
        <App/>
    </BackgroundContextProvider>
  )
}


// const ChildWithContext = ContextConsumerWrapper(App, BackgroundContext);
// const ChildWithProvide = contextProviderWrapper(
//   ChildWithContext,
//   BackgroundContext,
//   initialContext
// );

// const AppWithContext = () => <ChildWithProvide />;

export default AppWithContext;
