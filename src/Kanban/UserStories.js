import React from "react";
import UserStory from './UserStory';
import './Kanban.css';


const UserStories = (props) => {

    const TODO_BUTON_TEXT="ToDo";
    const ONGOING_BUTON_TEXT="On going";
    const DONE_BUTON_TEXT="Done";


    return (
        <div className="wrapper">

            <div className="backlog">
                {
                    props.userStoriesBackLog.map(userStory =>

                        <UserStory titulo={userStory.titulo} estado={userStory.estado} descripcion={userStory.descripcion} 
                        key={userStory.id} buttonText={TODO_BUTON_TEXT} prioridad={userStory.prioridad}
                         cambiarEstado={props.cambiarEstado} id={userStory.id} fechaExpiracion={userStory.fechaExpiracion}
                         borrarUserStory={props.borrarUserStory} editarUserStory={props.editarUserStory}
                        />
                    )
                }
            </div>

            <div className="todo">
                {
                    props.userStoriesToDo.map(userStory =>

                        <UserStory titulo={userStory.titulo} estado={userStory.estado} descripcion={userStory.descripcion} 
                        key={userStory.id} buttonText={ONGOING_BUTON_TEXT} prioridad={userStory.prioridad} 
                        cambiarEstado={props.cambiarEstado} id={userStory.id} fechaExpiracion={userStory.fechaExpiracion} 
                        fechaCreacion ={userStory.fechaCreacion} borrarUserStory={props.borrarUserStory} editarUserStory={props.editarUserStory}
                        />
                    )
                }

            </div>

            <div className="ongoing">

                {
                    props.userStoriesOngoing.map(userStory =>

                        <UserStory titulo={userStory.titulo} estado={userStory.estado} descripcion={userStory.descripcion} 
                        key={userStory.id} buttonText={DONE_BUTON_TEXT} prioridad={userStory.prioridad}
                        id={userStory.id} fechaExpiracion={userStory.fechaExpiracion} fechaCreacion ={userStory.fechaCreacion}
                        cambiarEstado={props.cambiarEstado} borrarUserStory={props.borrarUserStory} editarUserStory={props.editarUserStory}
                        />
                    )
                }

            </div>
            <div className="done">
                {
                    props.userStoriesDone.map(userStory =>

                        <UserStory titulo={userStory.titulo} estado={userStory.estado} descripcion={userStory.descripcion} 
                        key={userStory.id}  prioridad={userStory.prioridad} id={userStory.id} fechaExpiracion={userStory.fechaExpiracion}
                        cambiarEstado={props.cambiarEstado} fechaCreacion ={userStory.fechaCreacion}
                        />
                    )
                }
            </div>
        </div>

    );
}

export default UserStories;