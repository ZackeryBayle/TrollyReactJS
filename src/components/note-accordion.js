import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { Accordion, Card } from "react-bootstrap";


export default function Notes(props){
    const [temp, setTemp] = useState({
        "firstName":String,
        "lastName":String,
        "email":String,
        "serial":Number
    })
    // console.log(props.user)

    function UserList(){
        const users = Array.from(props.user);
        console.log(users)
        var data =users.map((e,id) => {
            console.log(e);
            console.log(id)
        });
        return <ul>{data.firstName}</ul>
    }

    return (
        <div>
            
            {props.user[0] ?
                (
                    <div className="notes_visable" onChange={UserList}>
                        
                        <Accordion >
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <div>NAME {props.user[0].firstName} {props.user[0].lastName}</div>
                                    <div>Serial: {props.user[0].description.serial}</div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div>{props.user[0].description.body}</div>
                                        <div>Agent: {props.user[0].description.agent}</div>
                                        <div>Date: {props.user[0].createdAt}</div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>

                    
                )
                : 
                (
                    <div className="notes_invisable"> 
                        <p>No Owner Found</p>
                    </div>
                )
            }
        </div>
    );
}


