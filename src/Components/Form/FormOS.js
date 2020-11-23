import React, {Component, useState} from "react";
import {Form,Button,Modal} from "react-bootstrap";
import style from "./FromOs.css"
import Axios from "axios";

class FromOS extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Name:"",
            Version:"",
            show:false
        }
        this.HandlerChange = this.HandlerChange.bind(this)
        this.HandlerSubmit = this.HandlerSubmit.bind(this)

        this.handleClose = () => this.setState({show:false});
        this.handleShow = () => this.setState({show:true});

    }
    componentDidMount() {
        if (this.props.active === true){
            this.show = style.active
        }
    }

    HandlerChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    HandlerSubmit(e){
        e.preventDefault()
        this.handleClose()
        Axios.post(process.env.REACT_APP_ROOT_API+"/Os",{Version:this.state.Version, Name:this.state.Name})
            .then((res) => {
                console.log(res.data)
                this.refreshPage()
            }).catch((err) => {
                console.log(err)
        })
    }

    refreshPage() {
        window.location.reload(false);
    }

    render() {
        return(
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Ajouter
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ajouter un OS</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.HandlerSubmit}>
                            <Form.Group>
                                <Form.Label>Nom du système</Form.Label>
                                <Form.Control type="text" value={this.state.Name} name={"Name"} onChange={this.HandlerChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Version</Form.Label>
                                <Form.Control type="text" value={this.state.Version} name={"Version"} onChange={this.HandlerChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Button variant={"success"} type="submit">Enregistrer</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }

}
export default FromOS