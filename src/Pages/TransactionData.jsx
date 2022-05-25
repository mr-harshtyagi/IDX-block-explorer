import { useParams } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import { Container,Row, Col, Table,Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import {
  BsInfoCircle,
  BsFillCheckCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";
import { BiCopy, } from "react-icons/bi";
import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
let CryptoJS = require("crypto-js")

export default function TransactionData(){
    let params =useParams();
    const [value, setValue] = useState("");
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState({});
    const [verified,setVerified] =useState(false)
    const [enterKeyComponent, setEnterKeyComponent] = useState(true);

    function handleClick(){
        var bytes = CryptoJS.AES.decrypt(data.transaction_data,value);
        try {
          var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          setData(decryptedData)
          setVerified(true)
        } catch (error) {
          setEnterKeyComponent(false)
        } }

 useEffect(()=>{
            axios.get(`https://test.ipdb.io/api/v1/transactions/${params.hash}`)
  .then(function (response) {
      if(response.data){
          setData(response.data.asset.data);
          setLoading(false);}
          else{
              setLoading(true);
          }
     })
  .catch(function (error) {
    console.log(error);
     })
    },[params])
    return (
      <>
        <SearchBar />
        {loading ? (
          <div className="text-center mt-5">
            <PulseLoader color="blue" />
          </div>
        ) : verified ? (
          <>
            <div style={{ marginTop: "-50px", backgroundColor: "white" }}>
              <h4 style={{ marginLeft: "40px", paddingTop: "10px" }}>
                Transaction Details
              </h4>
              <div
                style={{
                  backgroundColor: "#F7F5F2",
                  padding: "8px",
                  width: "90%",
                  marginLeft: "40px",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                }}
              >
                <Table>
                  <tbody>
                    <tr style={{ borderColor: "white" }}>
                      <td>
                        <BsInfoCircle
                          style={{ fontSize: "0.8rem", color: "grey" }}
                        />{" "}
                        Transaction Hash
                      </td>
                      <td>
                        {data.transaction_hash}
                        <BiCopy
                          style={{
                            fontSize: "1rem",
                            color: "grey",
                            marginLeft: "5px",
                          }}
                        />
                      </td>
                    </tr>
                    <tr style={{ borderColor: "white" }}>
                      <td>Status</td>
                      <td style={{ color: "green" }}>
                        <BsFillCheckCircleFill />
                        {" " + data.status}
                      </td>
                    </tr>
                    <tr style={{ borderColor: "white" }}>
                      <td>Block No.</td>
                      <td style={{ color: "#5463FF" }}>
                        {data.block_number}
                        <span
                          style={{
                            padding: "5px",
                            fontSize: "0.7rem",
                            borderRadius: "10px",
                            marginLeft: "10px",
                            color: "white",
                            backgroundColor: "#398AB9",
                          }}
                        >
                          10 Block confirmations
                        </span>
                      </td>
                    </tr>
                    <tr style={{ borderColor: "white" }}>
                      <td>Document Identifier</td>
                      <td>{data.doc_uid}</td>
                    </tr>
                    <tr style={{ borderColor: "white" }}>
                      <td>Document Version</td>
                      <td>
                        <strong>{data.doc_version}</strong>
                      </td>
                    </tr>
                    <tr style={{ borderColor: "white" }}>
                      <td>Issuer</td>
                      <td>{data.issuer}</td>
                    </tr>
                    <tr style={{ borderColor: "white" }}>
                      <td>Holder</td>
                      <td>{data.holder}</td>
                    </tr>
                    <tr style={{ borderColor: "white" }}>
                      <td>Doc Signature</td>
                      <td>
                        {data.doc_signature.slice(0, 70) + "...."}
                        <BiCopy
                          style={{
                            fontSize: "1rem",
                            color: "grey",
                            marginLeft: "5px",
                          }}
                        />
                      </td>
                    </tr>
                    <tr style={{ borderColor: "white" }}>
                      <td>Time Stamp</td>
                      <td>{data.datetime}</td>
                    </tr>
                    <tr style={{ borderColor: "white" }}>
                      <td>Revocation Status</td>
                      <td>{data.revocation_status.toString()}</td>
                    </tr>
                    <tr style={{ borderColor: "white" }}>
                      <td>Gas Fee</td>
                      <td style={{ color: "blue" }}>{data.gas_fee}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </>
        ) : (
          <>
            {enterKeyComponent ? (
              <div
                style={{
                  marginTop: "-50px",
                  backgroundColor: "white",
                  height: "100px",
                }}>
                <Container style={{ paddingTop: "60px", textAlign:"center" }}>
                  <Row>
                    <Col lg="2"></Col>
                    <Col lg="8">
                      <h2>Enter your Secret Key to view this Transaction</h2>
                      <Form.Control
                        style={{ width: "90%", marginTop: "20px", marginLeft:"40px" }}
                        onChange={(e) => {
                          setValue(e.target.value);
                        }}
                        placeholder="Enter your Secret Key"
                        type="hash"
                        id="hash"
                        value={value}
                        aria-describedby="transaction-hash"
                      ></Form.Control>
                      <Button className='mt-3'  onClick={handleClick} variant="primary">
                        <strong> Verify</strong>
                      </Button>
                    </Col>
                    <Col lg="2"></Col>
                  </Row>
                </Container>
              </div>
            ) : (
              <div
                style={{
                  marginTop: "-50px",
                  backgroundColor: "white",
                  height: "100px",
                  textAlign: "center",
                }}
              >
                <BsFillXCircleFill
                  style={{ fontSize: "5rem", margin: "30px", color: "red" }}
                />
                <h2>You are not Authorized to view this transaction.</h2>
              </div>
            )}
          </>
        )}
      </>
    );}

