import React, { useState } from 'react';
import axios from 'axios';

const AddProject = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('active');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/projects`, {
                name,
                description,
                status
            })
            .then(response => {
                alert('Project added successfully!');
                setName('');
                setDescription('');
                setStatus('active');
            })
            .catch(error => {
                console.error("Error adding project:", error);
            });
    };

    return ( <
        div >
        <
        h2 > Add Project < /h2> <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        placeholder = "Project Name"
        value = { name }
        onChange = {
            (e) => setName(e.target.value)
        }
        required / >
        <
        textarea placeholder = "Project Description"
        value = { description }
        onChange = {
            (e) => setDescription(e.target.value)
        }
        required / >
        <
        select value = { status }
        onChange = {
            (e) => setStatus(e.target.value)
        } >
        <
        option value = "active" > Active < /option> <
        option value = "inactive" > Inactive < /option> <
        option value = "completed" > Completed < /option> < /
        select > <
        button type = "submit" > Add Project < /button> < /
        form > <
        /div>
    );
};

export default AddProject;