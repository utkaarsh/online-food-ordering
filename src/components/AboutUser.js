import React, { Component } from "react"

class AboutUs extends Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name: "xyz",
                location:"abc",
                contact:"123",
                url:"www.info"
            }
        }
    }

   async componentDidMount(){
        const data=await fetch("https://api.github.com/users/utkaarsh");
        const json=await data.json();
        console.log("json :",json);
        this.setState({userInfo:json})
    }

    render() {
        const {name,location,contact}=this.props;
        return(
            <div className="user-card">
            <h3>Name : {name}</h3>
            <h3>Address : {location}</h3>
            <h3>Software Developer</h3>
            <h3>Contact : {contact}</h3>
            <h3>Website: {this.state.userInfo.url}</h3>
            </div>
        )
    }
}
export default AboutUs;