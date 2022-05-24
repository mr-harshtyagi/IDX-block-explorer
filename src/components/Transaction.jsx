import { useEffect, useState } from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import { GrTransaction } from "react-icons/gr";
import axios from 'axios';
import { PulseLoader } from 'react-spinners';

export default function Transaction(props){
  const [data,setData] = useState({});
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
            axios.get(`https://test.ipdb.io/api/v1/transactions/${props.hash}`)
  .then(function (response) {
    setData(response.data.asset.data);
    setLoading(false)
     })
  .catch(function (error) {
    console.log(error);
     })
    },[])

    return(<>
      {loading ? (
        <div className='text-center mt-5'>
            <PulseLoader color="blue"/>
            </div>

      ):(
        <Container style={{padding:"5px"}}>
        <Row>
          <Col lg="1"> 
          <GrTransaction style={{fontSize:"1.5rem"}} />
          
          </Col>
          <Col lg="3">
          <div>
            <h5 style={{fontSize:"1rem"}}><strong>{data.block_number}</strong> </h5>
            <h5 style={{fontSize:"0.8rem",color:"grey"}}>18 sec ago</h5>
            </div>
          </Col>
          <Col lg="6">
          <div style={{display:"inline-block"}}>
               <h5 style={{fontSize:"1rem"}}>From 
                <span style={{color:"blue", fontSize:"0.9rem"}}> {data.issuer.slice(0,15)+ "..."}</span> </h5>
                <h5 style={{fontSize:"1rem"}}>To 
                <span style={{color:"blue", fontSize:"0.9rem"}}> {data.holder.slice(0,15)+ "..."}</span> </h5> 
            
            </div>
         
          </Col>
           <Col lg="2">
          <div style={{display:"inline-block"}}>
               <h5 style={{fontSize:"1rem"}}>{data.gas_fee} IDX </h5> 
            </div>
         
          </Col>
          <hr style={{width:"90%",marginLeft:"40px"}}/>
        </Row>
      </Container> 

      )}
        
    </>
    );
}
