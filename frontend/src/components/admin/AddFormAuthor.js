//import React ,{useEffect,useState}from 'react'
import { Table, Modal, Button, Form ,Col} from 'react-bootstrap';
import axios  from 'axios';
import React, { Component } from 'react';


export default class AddFormAuthor extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onFirstNameChange=this.onFirstNameChange.bind(this)
        this.onLastNameChange=this.onLastNameChange.bind(this)
        this.onBIOChange=this.onBIOChange.bind(this)
        this.onDOBChange=this.onDOBChange.bind(this)
        this.state = {
            firstName:'',
	    lastName:'',
	    dob:'',
	    bio:'',	
            pic: ''
        }
    }

    onFirstNameChange(e){
        this.setState({firstName:e.target.value})
    }
    onLastNameChange(e){
        this.setState({lastName:e.target.value})
    }
    onBIOChange(e){
        this.setState({bio:e.target.value})
    }
    onDOBChange(e){
        this.setState({dob:e.target.value})
    }

    onFileChange(e) {
        this.setState({ pic: e.target.files[0] })
    }
    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('pic', this.state.pic)
        formData.append('firstName',this.state.firstName)
        formData.append('lastName',this.state.lastName)
        formData.append('dob',this.state.dob)
        formData.append('bio',this.state.bio)
        console.log(formData);
        axios.post("http://localhost:5000/admin/author", formData, {}).then(res => {console.log(res)})
       	this.props.UpdateShowModal(false); 
    }
    render() {
        return (
	<div>
        <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="name" name="firstName" placeholder="Enter First Name" onChange={this.onFirstNameChange}/>
                </Form.Group>
                <Form.Group controlId="formSecondName">
                        <Form.Label>Second Name</Form.Label>
                        <Form.Control type="name" name="lastName" placeholder="Enter Second Name"  onChange={this.onLastNameChange}/>
                </Form.Group>
                <Form.Group controlId="formDateOfBirth">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" name="dob" placeholder="Enter Date of Birth"  onChange={this.onDOBChange}/>
                </Form.Group>
                <Form.Group controlId="BIOS">
                        <Form.Label>BIOS</Form.Label>
                        <Form.Control type="text" name="bio" placeholder="Enter BIOS" onChange={this.onBIOChange}/>
                </Form.Group>
            
                 <Form.Group>
                    <Form.Label>Enter Photo</Form.Label>
                    <Form.File id="custom-file" label="Custom file input"  name="pic"  onChange={this.onFileChange} />
                </Form.Group>
                <Button variant="primary" type="submit">ADD Author </Button>
        </Form>
	</div>
        )
    }
}

 /*<div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                            <input type="text" onChange={this.onFirstNameChange} />
                        </div>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>*/
