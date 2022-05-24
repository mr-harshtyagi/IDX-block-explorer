import { useParams } from 'react-router-dom';
import axios from 'axios';
import SearchBar2 from '../components/SearchBar2';
import { Table } from 'react-bootstrap';
import { BsInfoCircle,BsFillCheckCircleFill } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";
import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';

export default function TransactionData(){
    let params =useParams();
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState({});

    useEffect(()=>{
            axios.get(`https://test.ipdb.io/api/v1/transactions/${params.hash}`)
  .then(function (response) {
    setData(response.data.asset.data);
    setLoading(false)
     })
  .catch(function (error) {
    console.log(error);
     })
    },[])
    return (
        <>
        <SearchBar2/>
        {loading ? (
            <div className='text-center mt-5'>
            <PulseLoader color="blue"/>
            </div>
        ) :(
            <div>
          
          <h4 style={{margin:"10px",marginLeft:"40px"}}>Transaction Details</h4>
      <div 
      style={{
          backgroundColor:"#F7F5F2",
          padding:"8px",
            width:"90%",
            marginLeft:"40px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
      <Table>
        <tbody>
                 <tr style={{borderColor:"white"}}>
                    <td><BsInfoCircle style={{fontSize:"0.8rem",color:"grey"}}/> Transaction Hash</td>
                    <td>{data.transaction_hash}
                        <BiCopy style={{fontSize:"1rem",color:"grey",marginLeft:"5px"}}/></td>
                </tr>
                <tr style={{borderColor:"white"}}>
                    <td>Status</td>
                    <td style={{color:"green"}}><BsFillCheckCircleFill/>{" "+ data.status}</td>
                </tr>
                <tr style={{borderColor:"white"}}>
                    <td>Block No.</td>
                    <td style={{color:"#5463FF"}}>{data.block_number}
                    <span style={{
                        padding:"5px",
                        fontSize:"0.7rem",
                        borderRadius:"10px",
                        marginLeft:"10px",
                    color:"white",
                    backgroundColor:"#398AB9"}}>
                        10 Block confirmations</span></td>
                </tr>
                <tr style={{borderColor:"white"}}>
                    <td>Document Identifier</td>
                    <td>{data.doc_uid}</td>
                </tr>
                <tr style={{borderColor:"white"}}>
                    <td>Document Version</td>
                    <td><strong>{data.doc_version}</strong></td>
                </tr>
                <tr style={{borderColor:"white"}}>
                    <td>Issuer</td>
                    <td>{data.issuer}</td>
                </tr><tr style={{borderColor:"white"}}>
                    <td>Holder</td>
                    <td>{data.holder}</td>
                </tr>
                <tr style={{borderColor:"white"}}>
                    <td>Doc Signature</td>
                    <td>{data.doc_signature.slice(0,70)+ "...."}<BiCopy style={{fontSize:"1rem",color:"grey",marginLeft:"5px"}}/></td>
                </tr>
                <tr style={{borderColor:"white"}}>
                    <td>Time Stamp</td>
                    <td>{data.datetime}</td>
                </tr>
                <tr style={{borderColor:"white"}}>
                    <td>Revocation Status</td>
                    <td>{data.revocation_status.toString()}</td>
                </tr>
                 <tr style={{borderColor:"white"}}>
                    <td>Gas Fee</td>
                    <td style={{color:"blue"}}>{data.gas_fee}</td>
                </tr>
        </tbody>  
        </Table>
    </div> 
    </div>



        ) }
       </>
    );
   
}

