import React from 'react';
import { Link } from "react-router-dom";
const pi=3.14

function page1(){
    return (
      <div className="main">
        <h1 className="margin">
          Hello PI {pi}
          <Link to="/page2">
            <button type="button" className="btn btn-lg btn-primary margin">
              <strong>Go to Second Page</strong>
            </button>
          </Link>
        </h1>
      </div>
    );
}

export default page1;