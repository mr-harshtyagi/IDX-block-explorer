import React from 'react';
import { Button } from 'react-bootstrap';
import Transaction from './Transaction';

export default function Card2(){
    return (
      <div
        style={{
          height: "450px",
          padding: "10px",
          marginTop: "-20px",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        }}
      >
        <h4 style={{ marginBottom: "20px" }}>Latest Transactions</h4>
        <Transaction
          block_number="3287473"
          issuer="0x4677byrihgyttt44"
          holder="0x738498bejieu4893"
          gas_fee="12"
        />
        <Transaction
          block_number="3287473"
          issuer="0x4677byrihgyttt44"
          holder="0x738498bejieu4893"
          gas_fee="12"
        />
        <Transaction
          block_number="3287473"
          issuer="0x4677byrihgyttt44"
          holder="0x738498bejieu4893"
          gas_fee="12"
        />
        <Transaction
          block_number="3287473"
          issuer="0x4677byrihgyttt44"
          holder="0x738498bejieu4893"
          gas_fee="12"
        />
        <div className="d-grid">
          <Button variant="primary">View More</Button>
        </div>
      </div>
    );
}

