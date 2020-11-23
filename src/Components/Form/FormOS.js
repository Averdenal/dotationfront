import React, {Component} from "react";
import {Form,Button,Modal} from "react-bootstrap";
import Axios from "axios";

class FormOS extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Name:"",
            Version:"",
            show:false,
            id:"",
            Update:false,
            BtnName:"Ajouter",
            BtnStyle:"success",
            Title:"Ajouter un OS"
        }
        this.HandlerChange = this.HandlerChange.bind(this)
        this.HandlerSubmit = this.HandlerSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)


    }
    componentDidMount() {
        if (this.props.id !== undefined){
            this.setState({
                BtnName:"Update",
                BtnStyle:"warning",
                Update:true,
                id:this.props.id,
                Title:"Modifier #"+this.props.id
            })

        }
    }
    handleClose() {
        this.setState({show:false})
    }
    handleShow (){
        this.setState({show:true})
        if (this.state.Update){
            Axios.get(process.env.REACT_APP_ROOT_API+"/Os/"+this.state.id)
                .then((res)=>{
                    this.setState({Name:res.data.Name, Version:res.data.Version})
                })
        }

    }

    HandlerChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    HandlerSubmit(e){
        e.preventDefault()
        if(this.state.Update){
            Axios.put(process.env.REACT_APP_ROOT_API+"/Os/"+this.state.id,{Version:this.state.Version, Name:this.state.Name})
                .then((res) => {
                    this.refreshPage()
                }).catch((err) => {
                console.log(err)
            })
        }else {
            Axios.post(process.env.REACT_APP_ROOT_API+"/Os",{Version:this.state.Version, Name:this.state.Name})
                .then((res) => {
                    this.refreshPage()
                }).catch((err) => {
                console.log(err)
            })
        }
        this.handleClose()
    }

    refreshPage() {
        window.location.reload(false);
    }

    render() {
        return(
            <>
                <Button variant={this.state.BtnStyle} onClick={this.handleShow}>
                    {this.state.BtnName}
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Form onSubmit={this.HandlerSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.state.Title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group>
                                <Form.Label>Nom du système</Form.Label>
                                <Form.Control type="text" value={this.state.Name} name={"Name"} onChange={this.HandlerChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Version</Form.Label>
                                <Form.Control type="text" value={this.state.Version} name={"Version"} onChange={this.HandlerChange}/>
                            </Form.Group>
                            <Form.Group>

                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            <Button variant={"success"} type="submit">Sauvegarder</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>

        )
    }

}
export default FormOS