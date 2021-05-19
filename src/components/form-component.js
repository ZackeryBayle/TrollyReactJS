import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import {  Button, Col, Form, FormControl, InputGroup } from "react-bootstrap";
import Notes from './note-accordion';


export default function FormComponent(props) {


    const [validated, setValidated] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [serial, setSerial] = useState(Number);
    const [userData, setUserData] = useState({

        email:String,
        firstName:String,
        lastName:String,
        serial:Number
    });


    const [formGridCrossCheck, setformGridCrossCheck] = useState(false);
    const [fetchError, setFetchError] = useState();
    const [ownerNotes, setOwnerNotes] = useState([])

    const handleClick = event => {
        event.preventDefault();
        updateSearch();
      }


    const updateSearch = (event) => {
        console.log("updateSearch running...")

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

    const searchFormSubmit = (event) => {
        console.log("Submit Search Form...")


        const nameSearch = (event) => {
            axios.get(`http://localhost:8080/api/Users/name/${firstName}" "${lastName}`)
                .then(response => {
                    console.log("Responce from nameSearch" + response)
                    setUserData(response.data)
                })
                .catch( error => {
                    console.log(error)
                })
        } 



        const emailSearch =(event) => {
            axios.get(`http://localhost:8080/api/Users/email/${email}`)
                .then( response => {
                console.log("Responce from emailSearch " + response.data);
                setUserData(response.data)
                })
                .catch( error => {
                    console.log(error)
                })
        }


        const serialSearch =(event) => {
            axios.get(`http://localhost:8080/api/Users/serial/${serial}`)
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
        if (email === "" && firstName !== "") {
            nameSearch();
        }
        if(email === "" && firstName === "" && serial !== "") {
            serialSearch();
        }


    }

        
        return (
            <div className="home_search_container">
                    <Form className="Owner_serch" noValidate validated={validated} >
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label></Form.Label>
                                <Form.Control id="email" type="email" placeholder="Enter Email" onChange={e =>{setEmail(e.target.value)}}  />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label></Form.Label>
                                <Form.Control id="firstName" type="name" placeholder="Enter First Name"onChange={e =>{setFirstName(e.target.value)}} />
                                <Form.Label></Form.Label>
                                <Form.Control id="lastName" type="name" placeholder="Enter Last Name" onChange={e =>{setLastName(e.target.value)}}/>
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label></Form.Label>
                                <Form.Control id="serial" type="text" placeholder="Enter Serial" onChange={e =>{setSerial(e.target.value)}} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCrossCheck">
                            <Form.Check type="switch" label="Cross Check" id="crossCheck" />
                        </Form.Group>

                        <Button type="button" onClick={ handleClick } >Search</Button>

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