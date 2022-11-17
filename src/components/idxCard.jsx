import React from 'react';
import { Link } from "react-router-dom";
import { Container,Row, Col } from 'react-bootstrap';

export default function IdxCard(){
    return (
      <div style={
        {height:"160px",
        padding:"10px",
        paddingTop:"10px",
         backgroundColor:"white", 
         marginTop:"-50px",
         borderRadius:"20px",
         marginLeft:"20px",
         marginRight:"20px",
         boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        }}>

        <Container>
  <Row>
    <Col lg="3">
      <p style={{color:"grey"}}> <strong>IDX PRICE</strong></p>
      <p style={{marginTop:"-10px"}}> <strong>$ 3.4 
        <span style={{fontSize:"0.8rem", color:"green",marginLeft:"10px"}}>+8.18%</span></strong></p>
      
      <p style={{color:"grey"}}> <strong>IDX MARKET CAP</strong></p>
       <p style={{marginTop:"-10px"}}> <strong>$ 17,345,584.00 
        </strong></p>
      
    
</Col>
    <Col lg="3">
      <p style={{color:"grey"}}> <strong>LATEST BLOCK</strong></p>
       <p style={{marginTop:"-10px"}}> <strong>3874285482 
        </strong></p>
      <p style={{color:"grey"}}> <strong>ACTIVE VALIDATORS</strong></p>
       <p style={{marginTop:"-10px"}}> <strong>34
        </strong></p>
      
</Col>
    <Col lg="2">
      <p style={{color:"grey"}}> <strong>TRANSACTIONS</strong></p>
       <p style={{marginTop:"-10px"}}> <strong>2,498.0 M
        </strong></p>
      <p style={{color:"grey"}}> <strong>VOTING POWER</strong></p>
       <p style={{marginTop:"-10px"}}> <strong>12,983,298.02 IDX 
        </strong></p>
      
</Col>
    <Col lg="4">
      <p style={{color:"grey"}}> <strong>IDX TRANSACTION HISTORY</strong></p>
      <img style={{height:"", width:"280px"}} src="images/graph.jpg" alt="" />  
</Col>
  </Row>
</Container>   
        
      </div>
    );
}