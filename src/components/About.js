import React from "react";
import AboutUs from "./AboutUser";

class About extends React.Component{
    render(){
        return(
            <div className="user-card">
                <h1>About</h1>
                <h4>This is the about page</h4>
    
                <AboutUs name={"Utkarsh Ranpise"} location={"Pune"} contact={"9876543210"} />
            </div>
        )
    }
}

export default About;