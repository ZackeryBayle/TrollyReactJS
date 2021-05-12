import React, { useState, useCallback } from 'react';
import axios from 'axios';
import {  Button, Col, Form, FormControl, InputGroup } from "react-bootstrap";
import Notes from './note-accordion';


export default function FormComponent(props) {


    const [validated, setValidated] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [serial, setSerial] = useState(null);
    const [userData, setUserData] = useState({

        email:String,
        firstName:String,
        lastName:String,
        serial:Number
    });


    const [formGridCrossCheck, setformGridCrossCheck] = useState(false);
    const [fetchError, setFetchError] = useState();
    const [ownerNotes, setOwnerNotes] = useState([])

    const emailUpdate = (e) => {
        // e.preventDefault();
        if (e.target.id === "email"){
            setEmail(e.target.value);
            updateSearch();
        }
    }
    const firstNameUpdate = (e) => {
        // e.preventDefault();
        if (e.target.id === "firstName"){
            setFirstName(e.target.value);
            updateSearch(e);
        }
    }
    const lastNameUpdate = (e) => {
        // e.preventDefault();
        if (e.target.id === "lastName"){
            setLastName(e.target.value);
            updateSearch(e);
        }
    }
    const serialUpdate = (e) => {
        // e.preventDefault();
        if (e.target.id === "serial"){
            setSerial(e.target.value);
            updateSearch(e);
        }
    }

    const updateSearch = (e) => {
        // e.preventDefault();

        setUserData({
            "firstName":firstName,
            "lastName":lastName,
            "email":email,
            "serial":serial
        })
        searchFormSubmit();
    }

    const crossCheckSub = (e) =>{
        const check = e.target.value;

        // crossCheckSearch()

    }

    const searchFormSubmit = (e) => {
        console.log("Submit Search Form...")
        // const nameSearch = (e) => {
        //     axios.get(`http://localhost:8080/api/Users/name/${firstName} ${lastName}`)
        //         .then(response => {
        //             console.log(response)
        //             // setUserData(response.data)
        //         })
        //         .catch( error => {
        //             console.log(error)
        //         })
        // } 



        const emailSearch =(e) => {
            axios.get(`http://localhost:8080/api/Users/email/${email}`)
                .then( response => {
                // console.log(response.data);
                setUserData(response.data)
                })
                .catch( error => {
                    console.log(error)
                })
        }

        if (email !== ""){
            emailSearch();
        }

    }

        
        return (
            <div className="home_search_container">
                    <Form className="Owner_serch" noValidate validated={validated} >
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label></Form.Label>
                                <Form.Control id="email" type="email" placeholder="Enter Email" onChange={emailUpdate}  />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label></Form.Label>
                                <Form.Control id="firstName" type="name" placeholder="Enter First Name" onChange={firstNameUpdate} />
                                <Form.Label></Form.Label>
                                <Form.Control id="lastName" type="name" placeholder="Enter Last Name" onChange={lastNameUpdate} />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label></Form.Label>
                                <Form.Control id="serial" type="text" placeholder="Enter Serial" onChange={serialUpdate} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCrossCheck">
                            <Form.Check type="switch" label="Cross Check" id="crossCheck" />
                        </Form.Group>

                        <Button onSubmit={searchFormSubmit}>Search</Button>

                    </Form>

                    <div className="home_logs">
                        <ul>
                            <li>
                                <Notes user={userData} />
                            </li>
                        </ul>
                    </div>
                    

                    <div className="home_important_snips">
                        <InputGroup>
                            <FormControl as="textarea" aria-label="" />
                        </InputGroup>
                    </div>
                </div>
        );
    }