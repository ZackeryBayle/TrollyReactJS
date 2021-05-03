import React, { useState } from 'react';

export default function Fetching(props) {
    // const [userData, setUserData] = useState({});
    // const [fetchError, setFetchError] = useState();

    const search = (props) => {

        fetch(`http://localhost:8080/api/Users/serial/${props.target.value}`)
            .then(res => res.json())
            .then(
            (result) => {
                console.log(result);
            },
            (error) => {
                console.log(error)
            }
            )
    }
    return (

        <div onLoad={search}>

        </div>
    );
}