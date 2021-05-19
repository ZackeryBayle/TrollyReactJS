import React, { useCallback, useState } from "react";
import { Accordion, Button, Card, Col, Form, FormControl, InputGroup } from "react-bootstrap";

import Notes from '../components/note-accordion';
import Fetching from '../helper/fetch';
import UpdateHook from '../helper/update_hook';
import FormComponent from '../components/form-component';

import axios from 'axios'

export default function Home(){ 

    const [tempNotes, setTempNotes ] = useState()

    const handleNotes = (event) => {
        event.preventDefault();
        setTempNotes(event.target.value);
        console.log(tempNotes)
    }

    const updateNotes = (e) =>{
        //Need to add updating body in API before working on this.
        //PS send prop to component or do axios call here in home
    }

    return(

        <div className="home_container">
            <div className="home_contact_container">
                    <FormComponent />
                <div className="home_contact_log">
                    
                    <div className="Hone_notes">
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text type="submit" >Save</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" onChange={handleNotes}/>
                    </InputGroup>

                    </div>
                </div>
            </div>
            
        </div>
    )
}