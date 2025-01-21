import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [editingProject, setEditingProject] = useState(null);
    const [updatedName, setUpdatedName] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [updatedStatus, setUpdatedStatus] = useState('active');

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/projects`)
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error("Error fetching projects:", error);
            });
    };

    const deleteProject = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/projects/${id}`)
            .then(() => {
                alert('Project deleted successfully!');
                fetchProjects(); // Refresh the list after deletion
            })
            .catch(error => {
                console.error("Error deleting project:", error);
            });
    };

    const startEditing = (project) => {
        setEditingProject(project);
        setUpdatedName(project.name);
        setUpdatedDescription(project.description);
        setUpdatedStatus(project.status);
    };

    const updateProject = (id) => {
        axios.put(`${process.env.REACT_APP_API_URL}/projects/${id}`, {
                name: updatedName,
                description: updatedDescription,
                status: updatedStatus
            })
            .then(() => {
                alert('Project updated successfully!');
                setEditingProject(null);
                fetchProjects(); // Refresh the list
            })
            .catch(error => {
                console.error("Error updating project:", error);
            });
    };

    return ( <
        div >
        <
        h2 > Project List < /h2> <
        table border = "1" >
        <
        thead >
        <
        tr >
        <
        th > Name < /th> <
        th > Description < /th> <
        th > Status < /th> <
        th > Created At < /th> <
        th > Updated At < /th> <
        th > Actions < /th> < /
        tr > <
        /thead> <
        tbody > {
            projects.map(project => ( <
                tr key = { project.id } >
                <
                td > { project.name } < /td> <
                td > { project.description } < /td> <
                td > { project.status } < /td>  <td>{new Date(project.created_at).toLocaleDateString()} {new Date(project.created_at).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</td >
                <
                td > { new Date(project.updated_at).toLocaleDateString() } { new Date(project.updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) } < /td> <
                td >
                <
                button onClick = {
                    () => startEditing(project)
                } > Edit < /button> <
                button onClick = {
                    () => deleteProject(project.id)
                } > Delete < /button> < /
                td > <
                /tr>
            ))
        } <
        /tbody> < /
        table >

        {
            editingProject && ( <
                div >
                <
                h3 > Edit Project < /h3> <
                input type = "text"
                value = { updatedName }
                onChange = {
                    (e) => setUpdatedName(e.target.value)
                }
                /> <
                textarea value = { updatedDescription }
                onChange = {
                    (e) => setUpdatedDescription(e.target.value)
                }
                /> <
                select value = { updatedStatus }
                onChange = {
                    (e) => setUpdatedStatus(e.target.value)
                } >
                <
                option value = "active" > Active < /option> <
                option value = "inactive" > Inactive < /option> <
                option value = "completed" > Completed < /option> < /
                select > <
                button onClick = {
                    () => updateProject(editingProject.id)
                } > Update < /button> <
                button onClick = {
                    () => setEditingProject(null)
                } > Cancel < /button> < /
                div >
            )
        } <
        /div>
    );
};

export default ProjectList;