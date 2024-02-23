import User from './User';
import UserClass from './UserClass';
import React from 'react';
class About extends React.Component{
    constructor(props){
        super(props);
      //  console.log("parent componenet constructor");
    }

    componentDidMount(){
       // console.log("parent componenet mounted");
    }
    
    render(){

       // console.log("parent componenet render")

        return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React WEb Serires</h2> 
            <UserClass name ="first" location ="Greater Noida (class) "/>
          
        </div>
    )
        }
}

export default About;