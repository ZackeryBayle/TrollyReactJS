import React, { useState } from 'react';
import axios from 'axios';

export default function Fetching(props) {

    const [userData, setUserData] = useState({
        firsName:"",
        lastName:"",
        email:"",
        serial:null
    });
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [serial, setSerial] = useState(null);

    const updateSearch = (e) => {
        e.preventDefault();
        if (e.target.id === "firstName"){
            setFirstName(e.target.value);
        }
        if (e.target.id === "lastName"){
            setLastName(e.target.value);
        }
        if (e.target.id === "email"){
            setEmail(e.target.value);
        }
        if (e.target.id === "serial"){
            setSerial(e.target.value);
        }

        setUserData({
            "firstName":firstName,
            "lastName":lastName,
            "email":email,
            "serial":serial
        })
    }
    


    const searchFormSubmit = (e) => {
        console.log("Submit Search Form...")

        const nameSearch = (e) => {
            axios.get(`http://localhost:8080/api/Users/name/${userData.firstName} ${userData.lastName}`)
                .then(response => {
                    console.log(response)
                    setUserData(response.data)
                })
                .catch( error => {
                    console.log(error)
                })
        }



        const emailSearch =(e) => {
            axios.get(`http://localhost:8080/api/Users/email/${userData.email}`)
                .then( response => {
                // console.log(response.data);
                setUserData(response.data)
                })
                .catch( error => {
                    console.log(error)
                })
        }
        

        if(!userData.firstName){
            nameSearch(e);
        }

        if(userData.email){
            emailSearch(e);
        }
 
 
    }

}