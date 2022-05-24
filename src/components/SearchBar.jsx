import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import { Container,Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function SearchBar(){
  let navigate =useNavigate();
  const [value,setValue] = useState("")
    return(
        <div style={{height:"200px", 
        backgroundColor:"blue", 
        }}>
        <h1 style={{color:"white", marginLeft:"20px", paddingTop:"10px"}}>IDX Block Explorer</h1>
        
          <Container style={{padding:"0",marginTop:"20px",marginLeft:"20px"}}>
  <Row>
    <Col lg="10">
    <Form.Control
    onChange={(e)=>{
      setValue(e.target.value)
    }}
    placeholder="Search by Document ID/Txn Hash/Digital Signature"
    type="hash"
    id="hash"
    value={value}
    aria-describedby="transaction-hash"
    ></Form.Control>  
</Col>
    <Col lg="2">
     <Button  
     onClick={()=>{
       navigate(`/transaction/${value}`)
     }}
  variant="outline-light">
    <BsSearch style={{fontSize:"1.2rem"}}/> 
    <strong>{" "}Search</strong> 
    </Button>{' '}    

</Col>
  </Row>
</Container>      
  </div>
    )
}