import React from "react";
import {Container,Table,Button} from "react-bootstrap";
import Axios from "axios";

import "./OsPage.css"
import FromOS from "../../Components/Form/FormOS";
import FormDeleteOs from "../../Components/Form/os/FormDeleteOs";

class OsPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            os:[],
            add:false

        }
    }
    componentDidMount() {
        Axios.get(process.env.REACT_APP_ROOT_API+"/Os")
            .then((res) =>{
                this.setState({os: res.data})
                console.log(this.state.os)
            })
    }
    render() {
        return (
            <Container fluid={true}>
                <h1>Système d'exploration</h1>
                <p>les systèmes d'explotation disponible</p>
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Version</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.os.map(item => (
                            <tr key={item.ID}>
                                <td>{item.ID}</td>
                                <td>{item.Name}</td>
                                <td>{item.Version}</td>
                                <td className={"btn-Action"}>
                                    <FormDeleteOs/>
                                </td>
                                <td>
                                    <Button variant={"warning"}>Update</Button>
                                </td>
                            </tr>
                            ))}

                        </tbody>
                    </Table>
                </div>
                <FromOS/>
            </Container>
        );
    }
}
export default OsPage