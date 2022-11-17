import React from 'react';
import SimpleBottomNavigation from './BottomNavigation';
import Nav from './Navbar';


function page2(){
    return(
     <> 
     <Nav/>
         <h1 className='margin'>This is page 2 </h1>
        <SimpleBottomNavigation/>
     </>
    );
}

export default page2;