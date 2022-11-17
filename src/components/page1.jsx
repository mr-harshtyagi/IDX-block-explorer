import React from 'react';
import SimpleBottomNavigation from './BottomNavigation';
import Nav from './Navbar';
function page1(){
    return (
      <>
      <Nav/>
        <h1 className="margin">This is page 1</h1>
        <SimpleBottomNavigation/>
      </>
    );
}

export default page1;