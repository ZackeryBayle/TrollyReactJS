import React from 'react';
import { Accordion, Card } from "react-bootstrap";



export default function Notes(props){
    // const [isFound, setIsFound] = useState(false);
    console.log(props.user[0])
    return (
        <div>
            {props.user[0] ?
                (
                    <div className="notes_visable">
                        {/* {console.log(props.user[0].serial)} */}
                        <Accordion >
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <div>{props.user[0].firstName} {props.user[0].lastName}</div>
                                    <div>Serial:{props.user[0].description.serial}</div>
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


