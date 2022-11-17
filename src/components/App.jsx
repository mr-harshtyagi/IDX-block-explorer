<<<<<<< HEAD
import React,{useState} from 'react';
import { Button} from 'react-bootstrap';
import Popup from "./Popup"
import Nav from './Navbar';
import SimpleBottomNavigation from './BottomNavigation';

=======
import SearchBar from './SearchBar';
import { Container,Row, Col } from 'react-bootstrap';
import IdxCard from './idxCard'
import Card1 from  "./Card1"
import Card2 from "./Card2"
>>>>>>> 9bc9f84eba8bd209261430609a9eecf2b6fcd07a

export default function App(){
    return (
      <>
<<<<<<< HEAD
      <h1>Hello World</h1>
      {/* <Nav/>
      <SimpleBottomNavigation/> */}
=======
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
>>>>>>> 9bc9f84eba8bd209261430609a9eecf2b6fcd07a
      </>
    );
}

