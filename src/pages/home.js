import React, { useState } from "react";
import { Accordion, Button, Card, Col, Form, FormControl, InputGroup } from "react-bootstrap";

import Notes from '../components/note-accordion';
import Fetching from '../helper/fetch';

import axios from 'axios'

export default function Home(){

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




    const [formGridCrossCheck, setformGridCrossCheck] = useState(false);
    const [validated, setValidated] = useState(false);
    const [currentValue, setCurrentValue] = useState([]);
    const [fetchError, setFetchError] = useState();
    const [ownerNotes, setOwnerNotes] = useState([])





    // Check for Cross Check - use more then one field to search for user

    const crossCheckSub = (e) =>{
        if (formGridCrossCheck === true){
            setformGridCrossCheck(false);
        }else setformGridCrossCheck(true)
        console.log({formGridCrossCheck});
    }

    const updateSearch = (e) => {
        e.preventDefault();
        if (e.target.id === "firstName"){
            setFirstName(e.target.value);
        }
        if (e.target.id === "lastName"){
            setLastName(e.target.value);
        }
       /* if (e.target.id === "email"){
            setEmail(e.target.value);
        }*/
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

    const updateSearchEmail = (e) => {
        if (e.target.id === "email"){
            setEmail(e.target.value);
        }

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


    return(

        <div className="home_container">
            <div className="home_contact_container">
                <div className="home_search_container">
                    <Form className="Owner_serch" noValidate validated={validated} >
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label></Form.Label>
                                <Form.Control id="email" type="email" placeholder="Enter Email" onChange={updateSearchEmail} />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label></Form.Label>
                                <Form.Control id="firstName" type="name" placeholder="Enter First Name" onChange={updateSearch} />
                                <Form.Label></Form.Label>
                                <Form.Control id="lastName" type="name" placeholder="Enter Last Name" onChange={updateSearch} />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label></Form.Label>
                                <Form.Control id="serial" type="text" placeholder="Enter Serial" onChange={updateSearch} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCrossCheck">
                            <Form.Check type="switch" label="Cross Check" id="crossCheck" onChange={crossCheckSub} />
                        </Form.Group>

                        <Button onClick={searchFormSubmit}>Search</Button>

                    </Form>
                    

                    <div className="home_important_snips">
                        <InputGroup>
                            <FormControl as="textarea" aria-label="" />
                        </InputGroup>
                    </div>
                </div>


                <div className="home_contact_log">
                    <div className="home_logs">
                        <ul>
                            <li>
                                {userData ?
                                    (
                                        <Notes user={userData} />
                                    ): null
                                }
                            </li>
                        </ul>


                    </div>
                    <div className="Hone_notes">
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text>Notes</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>

                    </div>
                </div>
            </div>
            
        </div>
    )
}