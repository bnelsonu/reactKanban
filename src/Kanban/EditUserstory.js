import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class NewUserStory extends Component {

    constructor(props) {
        super(props);

            this.state = {
                id: props.id,
                titulo: props.titulo,
                descripcion: props.descripcion,
                prioridad: props.prioridad,
                fechaExpiracion: props.fechaExpiracion,
                fechaCreacion: props.fechaCreacion
            };
        
    }


    handleSubmit(event) {
        event.preventDefault();
        const inputs = event.target.getElementsByTagName('input');
        this.setState({
            titulo: inputs.titulo,
            descripcion: inputs.descripcion,
            prioridad:  inputs.prioridad,
            fechaExpiracion: inputs.fechaExpiracion,
            fechaCreacion: inputs.fechaCreacion
        });

    }

    handleTituloChange = event => {
        this.setState(
            {
                titulo: event.target.value
            }
        );
    }

    handleDescripcionChange = event => {
        this.setState(
            {
                descripcion: event.target.value
            }
        );
    }

    handlePrioridadChange = event => {
        this.setState(
            {
                prioridad: event.target.value
            }
        );
    }

    handleFechaExpiracionChange = event => {
        this.setState(
            {
                fechaExpiracion: event.target.value
            }
        );
    }

    handleFechaCreacionChange = event => {
        this.setState(
            {
                fechaCreacion: event.target.value
            }
        );
    }

    handleSubmit = (event) =>{

        event.preventDefault();

        this.props.actualizarUserStory(this.state.id, this.state.titulo, this.state.descripcion, this.state.prioridad, this.state.fechaExpiracion, this.state.fechaCreacion);
    }

    render() {

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="titulo">Título</Label>
                    <Input type="text" name="titulo" id="título" placeholder="título" 
                    value={this.state.titulo}   onChange={this.handleTituloChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="descripcion">Descripción</Label>
                    <Input type="text" name="descripcion" id="descripcion" placeholder="descripción"
                     value={this.state.descripcion}  onChange={this.handleDescripcionChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="prioridad">Prioridad</Label>
                    <Input type="select" value={this.state.prioridad} name="prioridad" id="prioridad" onChange={this.handlePrioridadChange}>>
                        <option>alta</option>
                        <option>media</option>
                        <option>baja</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="fechaExpiracion">Fecha de Expiración</Label>
                    <Input type="datetime"  name="fechaExpiracion" id="fechaExpiracion" placeholder="Fecha de Expiración"  onChange={this.handleFechaExpiracionChange} value={this.state.fechaExpiracion} />
                </FormGroup>
                <FormGroup>
                    <Label for="fechaCreacion">Fecha de Creación</Label>
                    <Input type="datetime" name="fechaCreacion" id="fechaCreacion" placeholder="Fecha de creación" value={this.state.fechaCreacion} onChange={this.handleFechaCreacionChange}/>
                </FormGroup> 
                <Button>Actualizar</Button>
            </Form>

        );

    }
}