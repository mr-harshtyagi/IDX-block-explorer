import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import Popup from "./Popup"

export default function App(){
 const [show,setShow] =useState(false);
    return (
      <div className='text-center'>
        <h1>Click on link below to show Popup</h1>
        <Button onClick={()=> setShow(true)} variant='primary'>Show Popup</Button>
       {show && <Popup/>}
          </div>
    );
}

