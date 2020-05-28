//import React ,{useEffect,useState}from 'react'
import { Table, Modal, Button, Form ,Col} from 'react-bootstrap';
import axios  from 'axios';
import React, { Component } from 'react';


export default class EditFormAuthor extends Component {

    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onFirstNameChange=this.onFirstNameChange.bind(this)
        this.onLastNameChange=this.onLastNameChange.bind(this)
        this.onBIOChange=this.onBIOChange.bind(this)
        this.onDOBChange=this.onDOBChange.bind(this)
	this.initalizeState=this.initalizeState.bind(this)
    }


        
     
    onFirstNameChange(e){
	this.props.Author.firstName=e.target.value;
	console.log(this.props.Author)
    }
    onLastNameChange(e){
	this.props.Author.firstName=e.target.value;
	console.log(this.props.Author)
    }
    onBIOChange(e){
	this.props.Author.firstName=e.target.value;
	console.log(this.props.Author)
    }
    onDOBChange(e){
	this.props.Author.dob=e.target.value;
	console.log(this.props.Author)
    }

    onFileChange(e) {
	this.props.Author.dob=e.target.files[0];
	console.log(this.props.Author)
    }
    onSubmit(e) {
        e.preventDefault()
        console.log(this.props.Author);
        axios.post(`http://localhost:5000/admin/author/update/${this.props.Author._id}`, this.props.Author, {}).then(res => {console.log(res)})
       	this.props.UpdateShowModal(false); 
    }
    render() {
	const firstName=this.props.Author.firstName;
	const lastName=this.props.Author.lastName;
	const pic=this.props.Author.pic;
	const dob=this.props.Author.dob;
	const bio=this.props.Author.bio;
        return (
	
	<div>
	{console.log(this.props.Author)}
	{this.initalizeState}
        <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="name" name="firstName" placeholder="Enter First Name"  defaultValue={firstName} onChange={this.onFirstNameChange}/>
                </Form.Group>
                <Form.Group controlId="formSecondName">
                        <Form.Label>Second Name</Form.Label>
                        <Form.Control type="name" name="lastName" placeholder="Enter Second Name"  defaultValue={lastName}  onChange={this.onLastNameChange}/>
                </Form.Group>
                <Form.Group controlId="formDateOfBirth">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" name="dob" placeholder="Enter Date of Birth" defaultValue={dob} onChange={this.onDOBChange}/>
                </Form.Group>
                <Form.Group controlId="BIOS">
                        <Form.Label>BIOS</Form.Label>
                        <Form.Control type="text" name="bio" placeholder="Enter BIOS"  defaultValue={bio} onChange={this.onBIOChange}/>
                </Form.Group>
            
                 <Form.Group>
                    <Form.Label>Enter Photo</Form.Label>
                    <Form.File id="custom-file" label="Custom file input"  name="pic"   onChange={this.onFileChange} />
                </Form.Group>
                <Button variant="primary" type="submit">ADD Author </Button>
        </Form>
	</div>
        )
    }
}
