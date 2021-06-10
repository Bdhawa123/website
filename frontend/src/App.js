import HeaderComponent from "./Components/HeaderComponent";
import WebsiteComponent from "./Components/WebsiteComponent";
import Container from "react-bootstrap/Container";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Container>
      <div className="app">
        <BrowserRouter>
          <HeaderComponent />

          <Switch>
            <Route exact path="/" component={WebsiteComponent} />
            <Route path="/Home" component={WebsiteComponent} />
            <Route path="/Blog" render={() => <div>Blog Component</div>} />
          </Switch>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
