import React, { Component } from 'react';
import UserStories from './UserStories';
import NewUserStory from './NewUserStory';
import { Row, Col, Button } from 'reactstrap';
import EditUserStory from './EditUserstory';

export default class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {

            editObject: {
                id: "",
                titulo: "",
                descripcion: "",
                fechaCreacion: "",
                fechaExpiracion: "",
                prioridad: "",
                estado: ""
            },
            showEdit: false,
            showForm: false,
            userStories: [
                {
                    id: 1,
                    titulo: "Crear página de login",
                    descripcion: "La pagina de login debe tener los siguientes elementos: user, password, regitrarse.",
                    fechaCreacion: "10/02/2019",
                    fechaExpiracion: "11/02/2019",
                    prioridad: "baja",
                    estado: "Backlog"
                },

                {
                    id: 2,
                    titulo: "Ingresar usuarios en la bd",
                    descripcion: "Correr los scripts para borrar y crear los usuarios e insertarlos en la base de datos",
                    fechaCreacion: "10/02/2019",
                    fechaExpiracion: "11/02/2019",
                    prioridad: "baja",
                    estado: "Backlog"
                },
                {
                    id: 3,
                    titulo: "Crear temporizador de sesión",
                    descripcion: "Implementar lo necesario para que el usuario sea deslogueado de su sesión después de 15min de inactividad",
                    fechaCreacion: "11/02/2019",
                    fechaExpiracion: "12/02/2019",
                    prioridad: "media",
                    estado: "ToDo"
                },

                {
                    id: 4,
                    titulo: "Crear scripts de bases de datos",
                    descripcion: "Crear los scripts de base de datos necesarios para integrar las nuevas clases de java.",
                    fechaCreacion: "11/02/2019",
                    fechaExpiracion: "12/02/2019",
                    prioridad: "alta",
                    estado: "Ongoing"
                },

                {
                    id: 5,
                    titulo: "Recopilar requerimientos de login",
                    descripcion: "Hablar con el bussiness owner en la reunión de la tarde para documentar los requerimientos de login",
                    fechaCreacion: "11/02/2019",
                    fechaExpiracion: "12/02/2019",
                    prioridad: "alta",
                    estado: "Done"
                }
            ]
        }
    }


    cambiarEstado = (estado, id) => {

        console.log(`${estado} y el id q es ${id}`);

        let cambiandoEstado = estado === 'Backlog' ? 'ToDo' : estado === 'ToDo' ? 'Ongoing' : 'Done'


        const objIndex = this.state.userStories.findIndex(userStory => userStory.id === id);

        let userStories = this.state.userStories;

        userStories[objIndex].estado = cambiandoEstado;

        this.setState({ userStories });

        console.log(estado);
        console.log(id);

    }

    showForm = () => {
        let showFormVar = this.state.showForm ? false : true;

        console.log(showFormVar);

        this.setState({ showForm: showFormVar });

        this.setState({ showEdit: false });

    }

    showEditForm = () => {
        let showFormVar = this.state.showEdit ? false : true;

        this.setState({ showEdit: showFormVar });

        this.setState({ showForm: false });

    }


    borrarUserStory = id => {

        let userStories = this.state.userStories;
        const objIndex = this.state.userStories.findIndex(userStory => userStory.id === id);

        //buscar en el array
        if (objIndex !== -1) {
            userStories.splice(objIndex, 1);
            this.setState(
                {
                    userStories
                }
            );
        }

    }
    agregarUserStory = (titulo, descripcion, prioridad, fechaExpiracion, fechaCreacion) => {
        let userStories = this.state.userStories;
        let nuevoId =  userStories.length+1;
        
        let agregar = 'Agregar';

        userStories.push({
            id: nuevoId,
            titulo: titulo,
            descripcion: descripcion,
            fechaCreacion: fechaExpiracion,
            fechaExpiracion: fechaCreacion,
            prioridad: prioridad,
            estado: "Backlog"
        })

        console.log(userStories);

        this.setState(
            {
                userStories,
                accion: agregar
            }
        );

        this.showForm();
    }

    editarUserStory = id => {

        console.log(id);

        let userStory = this.state.userStories[id - 1];

        let editObjectVar = this.state.editObject;
        editObjectVar.id = userStory.id;
        editObjectVar.titulo = userStory.titulo;
        editObjectVar.descripcion = userStory.descripcion;
        editObjectVar.fechaCreacion = userStory.fechaCreacion;
        editObjectVar.fechaExpiracion = userStory.fechaExpiracion;
        editObjectVar.prioridad = userStory.prioridad;
        editObjectVar.estado = userStory.estado;

        this.setState({ editObject: editObjectVar });

        this.showEditForm();
    }

    actualizarUserStory = (id, titulo, descripcion, prioridad, fechaExpiracion, fechaCreacion) => {

        console.log("dentro de actalizar");

        const objIndex = this.state.userStories.findIndex(userStory => userStory.id === id);

        let userStories = this.state.userStories;

        userStories[objIndex].titulo = titulo;
        userStories[objIndex].descripcion = descripcion;
        userStories[objIndex].prioridad = descripcion;
        userStories[objIndex].fechaCreacion = fechaCreacion;
        userStories[objIndex].fechaExpiracion = fechaExpiracion;
        userStories[objIndex].prioridad = prioridad;

        this.setState({userStories});
        this.showEditForm();

    };

    completar = id => {
        const objIndex = this.state.tareas.findIndex(tarea => tarea.id === id);

        let tareas = this.state.tareas;

        tareas[objIndex].estado = "completa";

        this.setState({ tareas });

        console.log(id);
    };




    render() {

        const userStoriesBackLog = this.state.userStories.filter(
            tarea => tarea.estado === "Backlog"
        );

        const userStoriesToDo = this.state.userStories.filter(
            tarea => tarea.estado === "ToDo"
        );

        const userStoriesOngoing = this.state.userStories.filter(
            tarea => tarea.estado === "Ongoing"
        );

        const userStoriesDone = this.state.userStories.filter(
            tarea => tarea.estado === "Done"
        );

        return (
            <div>
                <Row lg="12">
                    <Col offset="4" style={{ backgroundColor: '#4D0F0F' }}></Col>
                    <Col lg="4" className="text-center text-white" style={{ backgroundColor: '#4D0F0F' }}><h1>Kanban</h1></Col>
                    <Col offset="4" style={{ backgroundColor: '#4D0F0F' }}></Col>
                </Row>

                <Row lg="12">
                    <Col lg="3" className="text-center bg-secondary text-white"><h3>Backlog</h3></Col>
                    <Col lg="3" className="text-center bg-secondary text-white"><h3>ToDo</h3></Col>
                    <Col lg="3" className="text-center bg-secondary text-white"><h3>Ongoing</h3></Col>
                    <Col lg="3" className="text-center bg-secondary text-white"><h3>Done</h3></Col>
                </Row>
                <div className="div-btn-agregar">

                    {(!this.state.showEdit) ?
                        < Button className="bg-dark btn-agregar" onClick={this.showForm}> {!this.state.showForm ?
                            'Add User Story' : 'Close'}</Button> : null
                    }

                    {this.state.showForm ?
                        <NewUserStory agregarUserStory={this.agregarUserStory} /> : null
                    }

                    {this.state.showEdit && !this.state.showForm ?
                        < Button className="bg-dark btn-agregar" onClick={this.showEditForm}> Close</Button>
                        : null
                    }
                    {this.state.showEdit && !this.state.showForm ?
                        <EditUserStory editUserStory={this.editarUserStory} actualizarUserStory={this.actualizarUserStory}
                            id={this.state.editObject.id}
                            titulo={this.state.editObject.titulo}
                            descripcion={this.state.editObject.descripcion}
                            prioridad={this.state.editObject.prioridad}
                            fechaExpiracion={this.state.editObject.fechaExpiracion}
                            fechaCreacion={this.state.editObject.fechaCreacion}

                        /> : null}
                </div>

                <UserStories userStoriesBackLog={userStoriesBackLog} userStoriesToDo={userStoriesToDo}
                    userStoriesOngoing={userStoriesOngoing} userStoriesDone={userStoriesDone}
                    cambiarEstado={this.cambiarEstado} borrarUserStory={this.borrarUserStory} editarUserStory={this.editarUserStory}
                />
            </div>
        );
    }


}

