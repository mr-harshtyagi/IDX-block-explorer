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
          hash="2dce3a5f12748b10c42ffd49496264a047b78db4dcaf776530fcf55aa63e44b1"
        />
        <Transaction
          key={2}
          hash="a9d14d10416fadb3123528fc1810d5da244de3da08d53deb6db4dd52cb119a96"
        />
        <Transaction
          key={3}
          hash="d12fad37411110a68141216ae614a6a3d168e51ac16fd37bb61577c129e84cc6"
        />
        <Transaction
          key={4}
          hash="b1762321337b007bd922bcdcced0550479236f1ed0fcaa5d5a6d05f4e838521b"
        />
        <div className="d-grid">
          <Button variant="primary">View More</Button>
        </div>
      </div>
    );
}

