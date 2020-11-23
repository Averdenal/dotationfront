import React, {Component} from "react";
import {Button} from "react-bootstrap";
import Axios from "axios";

class FormDeleteOs extends Component{

    handleUDelete(){
        if (window.confirm('Etes vous sur de supprimer cette element ?')){
            Axios.delete(process.env.REACT_APP_ROOT_API+"/Os/"+this.props.id)
                .then((res) => {
                    console.log(res)
                }).catch((err) =>{
                console.log(err)
            })
        }
        window.location.reload(false);
    }

    render() {
        return(
            <Button variant={"danger"} type={"submit"} onClick={() =>  this.handleUDelete()}>Delete</Button>

        )
    }

}
export default FormDeleteOs