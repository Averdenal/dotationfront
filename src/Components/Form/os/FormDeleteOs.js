import React, {Component} from "react";
import {Button} from "react-bootstrap";
import Axios from "axios";

class FormDeleteOs extends Component{
    constructor(props) {
        super(props);

    }
    handleUDelete(){
        Axios.delete(process.env.REACT_APP_ROOT_API+"/Os/"+this.props.id)
            .then((res) => {
                console.log(res)
            }).catch((err) =>{
            console.log(err)
        })
    }
    render() {
        return(
            <form onSubmit={alert("de")} >
                <Button variant={"danger"} type={"submit"}>Delete</Button>
            </form>

        )
    }

}
export default FormDeleteOs