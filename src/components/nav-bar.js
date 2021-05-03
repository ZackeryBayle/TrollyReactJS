import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";




export default class Navbar extends Component{

    constructor(props){
        super(props);
        this.state= {loggedIn:"FALSE"};
    }






    render() {

        const setActiveLink = e => {
        // easier for me, you can change with getElementById or getElementByClassName
        const links = document.getElementsByTagName("a"); 
    
        Array.from(links).forEach(el => el.classList.remove("active"));
        e.target.classList.add("active");
    };
    const HeaderView = e => {
            console.log("Hello")
    }
        


        return (

        <div className="nav_bar" onChange={HeaderView}>

            <div className="nav_left">
                <ul>
                <li className="nav-link">
                    <Link to="/" onClick={setActiveLink}>Home</Link>
                </li>
                <li className="nav-link">
                    <Link to="/about" onClick={setActiveLink}>About</Link>
                </li>
                <li className="nav-link">
                    <Link to="/dashboard" onClick={setActiveLink}>Dashboard</Link>
                </li>
                </ul>
            </div>

            <div className="nav_center">
                <h1>Trolly CRM</h1>
            </div>

            <div className="nav_right">
                Action Panel...
            </div>
        </div>
        )
    }


}