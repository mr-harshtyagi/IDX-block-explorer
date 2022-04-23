import { Navbar,Container } from "react-bootstrap";
import { BsEggFill } from "react-icons/bs";

export default function Nav(){
    return(
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
      <BsEggFill
        size="40px"
        className="me-3"
      />
      React Bootstrap
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
    )
}