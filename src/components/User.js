import React from "react"
import AddUser from "./AddUser"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render() {
    return(
        <div className="user">
            <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon" />
            <IoHammerSharp onClick={() => {
                this.setState({
                    editForm: !this.state.editForm
                }) 
            }} className="edit-icon" />
            <h3 className="first_name" >Имя: {this.user.first_name}</h3>
            <h3 className="last_name">Фамилия: {this.user.last_name}</h3>
            <img src={this.user.avatar}  width="200" height="200"/>
            <p>{this.user.email}</p>
            <b>{this.user.isHappy ? 'Счастлив :)' : 'Не сособо :('}</b>

            {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
        </div>
    )
  }
}

export default User