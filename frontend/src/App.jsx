import { Outlet } from "react-router-dom";
import  Header  from "./components/Header.jsx";
import { Container } from "react-bootstrap";
const App = () => {
  return ( 
    <>
    <Header />    
    <Container className="my-2">
    <Outlet />
    </Container>
    </>
   );
}
 
export default App;