import { BiCube } from "react-icons/bi";
import { Container,Row, Col } from 'react-bootstrap';
export default function Block(){
    return(
        <Container style={{padding:"5px"}}>
        <Row>
          <Col lg="1"> 
          <BiCube style={{fontSize:"1.5rem"}} />
          
          </Col>
          <Col lg="3">
          <div>
            <h5 style={{fontSize:"1rem"}}><strong>2731927839</strong> </h5>
            <h5 style={{fontSize:"0.8rem",color:"grey"}}>18 sec ago</h5>
            </div>
          </Col>
          <Col lg="6">
          <div style={{display:"inline-block"}}>
               <h5 style={{fontSize:"1rem"}}>Validated By 
                <span style={{color:"blue", fontSize:"0.9rem"}}> Validator : Jarvis</span> </h5> 
            <h5 
            style={{fontSize:"0.8rem",color:"grey"}}>
            <span style={{color:"blue"}}>178 txns</span>  in 8 secs </h5>
            </div>
         
          </Col>
           <Col lg="2">
          <div style={{display:"inline-block"}}>
               <h5 style={{fontSize:"1rem"}}>324 IDX </h5> 
            
            </div>
         
          </Col>
          <hr style={{width:"90%",marginLeft:"40px"}}/>
        </Row>
      </Container> 
    
    );
}
