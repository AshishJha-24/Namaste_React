import User from './User';
import UserClass from './UserClass';
import React,{Consumer} from 'react';
import UserContext from '../utils/UserContext';
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
            <UserClass name ="first" location ="Greater Noida (class) "/>
          <UserContext.Consumer>
            {(data)=><p>{data.loggedInUser}</p>}
          </UserContext.Consumer>
          
        </div>
    )
        }
}

export default About;