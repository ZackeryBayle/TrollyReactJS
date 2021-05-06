import React, { useState, useCallback } from 'react';
import {  Button, Col, Form, FormControl, InputGroup } from "react-bootstrap";


export default function FormComponent(props) {


    const [validated, setValidated] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [serial, setSerial] = useState(null);
    const [userData, setUserData] = useState({
        firsName:"",
        lastName:"",
        email:"",
        serial:null
    });

    const emailUpdate = (e) => {
        e.preventDefault();
        if (e.target.id === "email"){
            // props.onChange(e.target.value);
            // console.log(props.value + "Props Value")
            // setEmail(e.target.value);
            // props.onChange(e.target.value);
            // updateSearch(e);
            
        }
    }
    const firstNameUpdate = (e) => {
        e.preventDefault();
        if (e.target.id === "firstName"){
            setFirstName(e.target.value);
            updateSearch(e);
        }
    }
    const lastNameUpdate = (e) => {
        e.preventDefault();
        if (e.target.id === "lastName"){
            setLastName(e.target.value);
            updateSearch(e);
        }
    }
    const serialUpdate = (e) => {
        e.preventDefault();
        if (e.target.id === "serial"){
            setSerial(e.target.value);
            updateSearch(e);
        }
    }

    const updateSearch = (e) => {
        e.preventDefault();

        setUserData({
            "firstName":firstName,
            "lastName":lastName,
            "email":email,
            "serial":serial
        })
    }


    const hookemail=(e)=>{return email}
        
        return (
            <div className="home_search_container">
                    <Form className="Owner_serch" noValidate validated={validated} >
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label></Form.Label>
                                <Form.Control id="email" type="email" placeholder="Enter Email"   />
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

                        <Button >Search</Button>

                    </Form>
                    

                    <div className="home_important_snips">
                        <InputGroup>
                            <FormControl as="textarea" aria-label="" />
                        </InputGroup>
                    </div>
                </div>
        );
    }