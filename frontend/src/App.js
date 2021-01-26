import HeaderComponent from "./Components/HeaderComponent";
import WebsiteComponent from "./Components/WebsiteComponent";
import Container from "react-bootstrap/Container";
import "./App.css";

/* global gapi */

function App() {
  return (
    <Container>
      <div className="app">
        {/* Header  */}
        <HeaderComponent />
        <WebsiteComponent />
        {/* body */}
      </div>
    </Container>
  );
}

export default App;
