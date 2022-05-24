import React from 'react';
import { Button } from 'react-bootstrap';
import Transaction from './Transaction';

export default function Card2(){
    return(
     <div style={
        {
         height:"450px",
         padding:"10px",
         marginTop:"-20px",
         backgroundColor:"white", 
         borderRadius:"20px",
         boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
        }}> 
        <h4 style={{marginBottom:"20px"}}>Latest Transactions</h4>
        <Transaction
        key={1}
        hash="84dd2763eb61b4fa56728fb61bb92ea041c8fa7287250b7619aebaad7b04c62b"
        />
        <Transaction
          key={2}
        hash="514163fc8b19a1ffd9efde0f9bce61a95ae75f231ec5f76d8ba30c3c8fd540c3"
        />
        <Transaction
          key={3}
        hash="2af853a9ee47963e80ba117bd16b58252e3e94a773a9acdb1f96795183447880"/>
        <Transaction
          key={4}
        hash="1225e20e9cbe031546a71b1e93f8c2ab5c0c300dd283c2e50112e7907cf8da97"/>
        <div className='d-grid'>
            <Button  
           variant="primary">
               View More
        </Button>
        </div>
          
     </div>
    );
}

