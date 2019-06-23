import React from "react";
import { Card, Button, CardBody, CardTitle, CardText, CardHeader, CardFooter } from 'reactstrap';
import './Kanban.css';


const UserStory = (props) => {
    return (
        <Card style={{ width: "90%", height: "60%" }}>
            <CardHeader style={{ backgroundColor: props.prioridad === 'alta' ? 'red' : props.prioridad === 'baja' ? 'green' : 'yellow' }}></CardHeader>
            <CardBody>
                <CardTitle className="text-center"><strong>{props.titulo}</strong></CardTitle>
                <CardText>
                    {props.descripcion}
                </CardText>
                <div>
                    < Button className={props.estado === 'Done' ? 'hidden' : 'btn-estado'}
                        onClick={() => props.cambiarEstado(props.estado, props.id)}> {props.buttonText} </Button>
                    < Button className={props.estado === 'Done' ? 'hidden' : 'btn-danger btn-borrar'}
                        onClick={() => props.borrarUserStory(props.id)}> Borrar </Button>
                    < Button onClick={()=> props.editarUserStory(props.id)} className={props.estado === 'Done' ? 'hidden' : 'btn-success btn-editar'}> Editar </Button>
                </div>

            </CardBody>
            <CardFooter className="text-muted">
                <div className="fecha-expira">Expira: {props.fechaExpiracion}</div>
                <div className="fechas-creacion">Creado: {props.fechaExpiracion}</div>
            </CardFooter>
        </Card>
    );

}




export default UserStory;