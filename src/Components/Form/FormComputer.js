import React from "react";
import {Form} from 'react-bootstrap'

class FromComputer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            NameOrdinateur:"",
            Codeexpress:"",
            Nbserial:"",
            Tarif:"",
            Idos:"1",
            Idcat:"1",
        }
        this.HandleChange = this.HandleChange.bind(this)
        this.HandleSubmit = this.HandleSubmit.bind(this)

    }
    componentDidMount() {


    }
    HandleSubmit(e){
        e.preventDefault()
        console.log(this.state)
    }
    HandleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return(
            <form onSubmit={this.HandleSubmit}>
                <Form.Group>
                    <Form.Label>Nom de l'ordinateur</Form.Label>
                    <Form.Control type={"text"} placeholder={"Nom de l'ordinateur"} onChange={this.HandleChange} name={"NameOrdinateur"} value={this.state.NameOrdinateur}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Service Tag / serial number</Form.Label>
                    <Form.Control type={"text"} placeholder={"Service Tag / serial number"} onChange={this.HandleChange} name={"Nbserial"} value={this.state.Nbserial}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Code express</Form.Label>
                    <Form.Control type={"text"} placeholder={"Service Tag / serial number"} onChange={this.HandleChange} name={"Codeexpress"} value={this.state.Codeexpress}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Prix du produit</Form.Label>
                    <Form.Control type={"text"} placeholder={"Prix du produit"} onChange={this.HandleChange} name={"Tarif"} value={this.state.Tarif}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Catégorie</Form.Label>
                    <Form.Control as="select" onChange={this.HandleChange} name={"Idcat"} id="Idcat">
                        {this.props.cat.map(item => (
                            <option key={item.ID} value={item.ID}>
                                {item.Type+ " - " + item.Models}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Système d'exploitation</Form.Label>
                    <Form.Control as="select" onChange={this.HandleChange} name={"Idos"} id="Idos">
                        {this.props.os.map(item => (
                            <option key={item.ID} value={item.ID}>
                                {item.Name+ " - " + item.Version}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <input type="submit" value={"Enregistrer"}/>

            </form>
        )
    }
}
export default FromComputer