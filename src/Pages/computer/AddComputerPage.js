import React from "react";
import FromComputer from "../../Components/Form/FormComputer";
import Axios from "axios";
import {Container} from "react-bootstrap";

class AddComputerPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            os:[],
            cat:[],
        }
    }

    componentDidMount() {
        Axios.get(process.env.REACT_APP_ROOT_API+"/cats")
            .then(function (res){
                this.setState({cat:res.data})
                console.log(this.state.cat)
            }.bind(this))
            .catch(function (err) {
                console.log(err)
            })
        Axios.get(process.env.REACT_APP_ROOT_API+"/Os")
            .then(function (res){
                this.setState({os:res.data})
            }.bind(this))
            .catch(function (err) {
            })
        console.log(this.state.os)

    }

    render() {
        return (
            <Container fluid={true}>
                <h1>Ajout d'Ordianteurs</h1>
                <FromComputer os={this.state.os} cat={this.state.cat} />
            </Container>
        );
    }
}

export default AddComputerPage