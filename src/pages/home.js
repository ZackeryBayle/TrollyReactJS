import React, { useCallback, useState } from "react";
import { Accordion, Button, Card, Col, Form, FormControl, InputGroup } from "react-bootstrap";

import Notes from '../components/note-accordion';
import Fetching from '../helper/fetch';
import UpdateHook from '../helper/update_hook';
import FormComponent from '../components/form-component';

import axios from 'axios'

export default function Home(){

    // const [userData, setUserData] = useState({
    //     firsName:"",
    //     lastName:"",
    //     email:"",
    //     serial:null
    // });
    
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [serial, setSerial] = useState(null);




    // const [formGridCrossCheck, setformGridCrossCheck] = useState(false);
    
    // const [currentValue, setCurrentValue] = useState
    // ({
    //     email:String,
    //     firstName:String,
    //     lastName:String,
    //     serial:Number
    // });
    // const [fetchError, setFetchError] = useState();
    // const [ownerNotes, setOwnerNotes] = useState([])





    // // Check for Cross Check - use more then one field to search for user

    // const crossCheckSub = (e) =>{
    //     const check = e.target.value;

    //     // crossCheckSearch()

    // }

    // const searchFormSubmit = (props) => {
    //     console.log("Submit Search Form...")
    //     setCurrentValue(props,
    //         {
    //             "email": currentValue.email
    //         }
    //     );
    //     console.log(currentValue + "CurrentValue");

    //     const nameSearch = (e) => {
    //         axios.get(`http://localhost:8080/api/Users/name/${currentValue.firstName} ${currentValue.lastName}`)
    //             .then(response => {
    //                 console.log(response)
    //                 // setUserData(response.data)
    //             })
    //             .catch( error => {
    //                 console.log(error)
    //             })
    //     }



    //     const emailSearch =(e) => {
    //         axios.get(`http://localhost:8080/api/Users/email/${currentValue.email}`)
    //             .then( response => {
    //             // console.log(response.data);
    //             // setUserData(response.data)
    //             })
    //             .catch( error => {
    //                 console.log(error)
    //             })
    //     }
    // }

    // const handleChange = (e) => {
    //     setCurrentValue({
    //         "email": "test"
    //     })
    // }
 



    return(

        <div className="home_container">
            <div className="home_contact_container">
                    {/* <FormComponent /> */}
                <div className="home_contact_log">
                    <div className="home_logs">
                        <ul>
                            <li>
                                {/* {this.props.userData ?
                                    (
                                        <Notes user={this.props.userData} />
                                    ): null
                                } */}
                                {/* <Notes user={""}/> */}
                            </li>
                        </ul>


                    </div>
                    <div className="Hone_notes">
                    {/* <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text>Notes</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup> */}

                    </div>
                </div>
            </div>
            
        </div>
    )
}