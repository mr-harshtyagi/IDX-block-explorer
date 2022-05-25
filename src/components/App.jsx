import SearchBar from './SearchBar';
import { Container,Row, Col } from 'react-bootstrap';
import IdxCard from './idxCard'
import Card1 from  "./Card1"
import Card2 from "./Card2"

export default function App(){
    return (
      <>
      <SearchBar/>
      <IdxCard/>
      <Container style={{marginTop:"40px",marginLeft:"70px",padding:"0"}}>
        <Row>
          <Col> 
          <Card1/>
          </Col>
          <Col>
          <Card2 />
          </Col>
        </Row>
      </Container> 
      </>
    );
}

