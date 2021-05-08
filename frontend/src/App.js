import HeaderComponent from "./Components/HeaderComponent";
import WebsiteComponent from "./Components/WebsiteComponent";
import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  return (
    <Container>
      <div className="app">
        <HeaderComponent />
        <WebsiteComponent />
      </div>
    </Container>
  );
}

export default App;
