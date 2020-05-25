//import React ,{useEffect,useState}from 'react'
import { Table, Modal, Button, Form ,Col} from 'react-bootstrap';
import axios  from 'axios';
import React, { Component } from 'react';

export default class EditFormBook extends Component {

    constructor(props) {
        super(props);
        this.onCoverChange = this.onCoverChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onNameChange=this.onNameChange.bind(this)
        this.onDetailsChange=this.onDetailsChange.bind(this)
        this.onAuthorChange=this.onAuthorChange.bind(this)
        this.onCategoryChange=this.onCategoryChange.bind(this)
        this.state = {
          	name:'',
			details:'',
			category:'',
			author:'',	
			cover: ''
        }
    }
    onNameChange(e){
        this.setState({name:e.target.value})
    }
    onDetailsChange(e){
        this.setState({details:e.target.value})
    }
    onAuthorChange(e){
        this.setState({author:e.target.value})
    }
    onCategoryChange(e){
        this.setState({category:e.target.value})
    }

    onCoverChange(e) {
        this.setState({cover: e.target.files[0] })
    }
    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name',this.state.name)
 	formData.append('details',this.state.details)
        formData.append('cover', this.state.cover)
        formData.append('category',this.state.category)
        formData.append('author',this.state.author)
        console.log(formData);
        axios.post(`http://localhost:5000/admin/book/update/${this.props.Book._id}`, formData, {}).then(res => {console.log(res)})
       	this.props.UpdateShowModal(false); 
    }
	render() {
        return (
	<div>
	{console.log(this.props.Book._id)}
        <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBookName">
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Book Name" defaultValue={this.props.Book.name} 				    onChange={this.onNameChange}/>
                </Form.Group>
                <Form.Group controlId="formBookDetails">
                        <Form.Label>Book Details</Form.Label>
                        <Form.Control type="details" placeholder="Enter Details of Book" defaultValue={this.props.Book.details} 			    onChange={this.onDetailsChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Photo</Form.Label>
                    <Form.File 
                            id="custom-file"
                            label="Custom file input"
			onChange={this.onCoverChange}
                    />
                </Form.Group>
                <Form.Group controlId="Categor">
                        <Form.Label>Categor</Form.Label>
                        <Form.Control as="select" onChange={this.onCategoryChange} defaultValue={this.props.Book.category}>
                                {this.props.Categories.map(Category=><option>{Category._id}</option>)}
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId="Author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control as="select" onChange={this.onAuthorChange} defaultValue={this.props.Book.author} >
                                {this.props.Authors.map(Author=> <option>{Author._id}</option>)}
                        </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                        ADD Author
                </Button>

        </Form>
	</div>
        )
    }
}
/*	defaultValue={this.props.Book.cover} defaultValue={this.props.Book.author} defaultValue={this.props.Book.category}*/
