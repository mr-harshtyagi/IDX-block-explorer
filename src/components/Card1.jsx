import React from 'react';
import { Button } from 'react-bootstrap';
import Block from "./Block"

export default function Card1(){
    return(
     <div 
        style={{
         height:"450px",
         padding:"10px",
         marginTop:"-20px",
         backgroundColor:"white", 
         borderRadius:"20px",
         boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
        }}> 
        <h4 style={{marginBottom:"20px"}}>Latest Blocks</h4>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <div className='d-grid mt-3'>
            <Button  
           variant="primary">
               View More
        </Button>
        </div>
     </div>
    );
}

