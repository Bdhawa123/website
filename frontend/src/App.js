import HeaderComponent from "./Components/HeaderComponent";
import WebsiteComponent from "./Components/WebsiteComponent";
import Container from "react-bootstrap/Container";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import BlogComponent from "./Components/BlogComponent.js";
import library from './images/library.jpg';
import mountain from './images/mountain.jpg';
import { BackgroundContext } from "./Components/Context/BackgroundContext";
import "./App.css";
import { useContext } from "react";

function App() {

  const {activePage,setCurrentPage} = useContext(BackgroundContext);

  console.log(activePage)

  return (
    <div style={{backgroundImage:`url(${(activePage=='main')?library:mountain})`,width:'auto'}}>
    <Container>
      <div className="app" >
        <BrowserRouter>
          <HeaderComponent />

          <Switch>
            <Route exact path="/" component={WebsiteComponent} />
            <Route path="/Home" 
             render={()=>{setCurrentPage('main')
             return <WebsiteComponent/>
           }} /> 
            <Route path="/Blog" 
              render={()=>{setCurrentPage('blog')
                return <BlogComponent/>
              }} />
          </Switch>
        </BrowserRouter>
      </div>
    </Container>
    </div>
  );
}

export default App;
