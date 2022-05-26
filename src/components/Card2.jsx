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
          key={1}
          hash="385ba062306bd209f4673a17e8e3fd0a5faee131b11b0ae19aa13aea249aa82d"
        />
        <Transaction
          key={2}
          hash="385ba062306bd209f4673a17e8e3fd0a5faee131b11b0ae19aa13aea249aa82d"
        />
        <Transaction
          key={3}
          hash="385ba062306bd209f4673a17e8e3fd0a5faee131b11b0ae19aa13aea249aa82d"
        />
        <Transaction
          key={4}
          hash="385ba062306bd209f4673a17e8e3fd0a5faee131b11b0ae19aa13aea249aa82d"
        />
        <div className="d-grid">
          <Button variant="primary">View More</Button>
        </div>
      </div>
    );
}

