import React, { useCallback, useState } from "react";
import { Accordion, Button, Card, Col, Form, FormControl, InputGroup } from "react-bootstrap";

import Notes from '../components/note-accordion';
import Fetching from '../helper/fetch';
import UpdateHook from '../helper/update_hook';
import FormComponent from '../components/form-component';

import axios from 'axios'

export default function Home(){ 


    return(

        <div className="home_container">
            <div className="home_contact_container">
                    <FormComponent />
                <div className="home_contact_log">
                    <div className="home_logs">
                        <ul>
                            <li>
                                <Notes user={FormComponent} />
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