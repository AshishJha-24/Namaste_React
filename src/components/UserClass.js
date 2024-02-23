import React from 'react';
import { json } from 'react-router-dom';

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            userInfo:{
                name: "Dummy",
                location:" Default",
            }
        }
      //  console.log(this.props.name+ "child componenet constructor");
    }

    async componentDidMount(){
        //console.log(this.props.name+ " componenet mounted");
           const data = await fetch("https://api.github.com/users/AshishJha-24");
           const jsondata = await data.json();
           this.setState({
            userInfo:jsondata
           })

    }
    componentDidUpdate(){
        console.log("Componenet updated");
    }
    
    render(){
       // console.log(this.props.name +" child componenet render")

        const {name,avatar_url,location}=this.state.userInfo; 


        return (
            <div className="user-card">
              <img src={avatar_url} alt="avatar image" />
             <h2>Name : {name} </h2>
             <h3>Location : {location} </h3>
             <h4>Contact : aj230104@gmail.com </h4>
        </div>
        );
    }
}

export default UserClass;