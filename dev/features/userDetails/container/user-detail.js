//React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as duck from '../duck';
import { Link } from 'react-router';
//Material UI
import RaisedButton from 'material-ui/RaisedButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
//Radium
import Radium, { Style } from 'radium';


class UserDetail extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isEditing: false,
            editTask: '',
            //idState: null,
            value: '',
            addTask: '',
            errorAdd: false,
            errorAddNull: false,
            errorEdit: false,
            errorEditNull: false
        };
    }

// componentWillMount(){
//         const {getMyUser} = this.props;
//         getMyUser();
//     }

//RC

//RC end




    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleChangeAddTask(event) {
        this.setState({
            addTask: event.target.value
        })
    }

    onCancelClick() {
        this.setState({
            isEditing: false,
            value: ''
        });
    }

    onSaveClick(id, completed) {
        const { user } = this.props;
        const { editTheTask } = this.props;
        var todo = user.Todos.map((task) => {
            return task;
        })
        if (this.refs.saveTask.value == null || this.refs.saveTask.value.trim() == "") {
            this.setState({
                isEditing: true,
                errorEdit: false,
                errorEditNull: true
            });
        } else if (todo.indexOf(this.refs.saveTask.value) == -1) {
            this.setState({
                isEditing: false,
                value: '',
                errorEdit: false,
                errorEditNull: false
            });
            return editTheTask(id, this.refs.saveTask.value, user.UserId, completed = false);
        } else {
            this.setState({
                isEditing: true,
                errorEdit: true,
                errorEditNull: false
            });
        }
    }
    onEditClick(todoId, todoTask, userId, completed) {
        this.setState({
            idState: todoId,
            editTask: todoTask,
            userId: userId,
            completed: completed,
            isEditing: true,
            errorAdd: false,
            errorAddNull: false,
            errorEdit: false,
            errorEditNull: false
        });
    }

    onDeleteClick(todoId, userId) {
        const { deleteTheTask } = this.props;
        deleteTheTask(todoId, userId);
        this.setState({
            errorAdd: false,
            errorAddNull: false,
            errorEdit: false,
            errorEditNull: false
        });
    }

    onAddTask() {
        const { user } = this.props;
        const { addNewTask } = this.props;
        var todo = user.Todos.map((todo) => {
            return todo.task;
        });
        if (this.refs.inputTask.getValue() == null || this.refs.inputTask.getValue() == "") {
            this.setState({
                addTask: '',
                errorAdd: false,
                errorAddNull: true
            });
        } else if (todo.indexOf(this.refs.inputTask.getValue()) == -1) {
            this.setState({
                addTask: '',
                errorAdd: false,
                errorAddNull: false
            })
            return addNewTask(user.UserId, this.refs.inputTask.getValue());
        } else {
            this.setState({
                addTask: '',
                errorAdd: true,
                errorAddNull: false
            })
        }
    }

    onEditControl() {
        const { user } = this.props;
        const { toggleTheTask } = this.props;
        const style = {
            margin: 12,
        };
        const cbStyles = {
            block: {
                maxWidth: 250,
            },
            checkbox: {
                marginBottom: 16,
            },
        };
        return user.Todos.map((todo, index) => {
            if (this.state.isEditing) {
                return (
                    <tbody key={todo.Id}>
                        <tr style={cbStyles.block}>
                            <td>
                                <Checkbox disabled={true} style={cbStyles.checkbox} defaultChecked={todo.Completed} onClick={() =>
                                    (toggleTheTask(todo.Id, todo.Task, user.UserId, todo.Completed))}
                                    label={todo.Task} />
                            </td>
                            <td><RaisedButton label="Edit" default={true} style={style} disabled={true} /></td>
                            <td><RaisedButton label="Delete" secondary={true} style={style} disabled={true} /></td>
                        </tr>
                    </tbody>
                );
            }
        });
    }

    errorAddValidation() {
        const errorAddText = {
            color: "red"
        };
        if (this.state.errorAdd) {
            return (
                <div style={errorAddText}>Task already exists</div>
            );
        }
    }

    errorAddValidationNull() {
        const errorAddText = {
            color: "red"
        };
        if (this.state.errorAddNull) {
            return (
                <div style={errorAddText}>Task cannot be null</div>
            );
        }
    }

    errorEditValidation() {
        const errorEditText = {
            color: "red"
        };
        if (this.state.errorEdit) {
            return (
                <div style={errorEditText}>Task already exists</div>
            );
        }
    }

    errorEditValidationNull() {
        const errorEditText = {
            color: "red"
        };
        if (this.state.errorEditNull) {
            return (
                <div style={errorEditText}>Edited task cannot be null</div>
            );
        }
    }

    createTodo() {
        const style = {
            margin: 12
        };
        const styleInput = {
            errorStyle: {
                color: orange500,
            },
            underlineStyle: {
                borderColor: orange500,
            },
            floatingLabelStyle: {
                color: orange500,
            },
            floatingLabelFocusStyle: {
                color: blue500,
            },
        };
        return (
            <div>
                <h4>Create New Task</h4>
                <TextField type="text"
                    floatingLabelText="Type a task then click add"
                    ref="inputTask"
                    value={this.state.addTask}
                    onChange={this.handleChangeAddTask.bind(this)}
                    disabled={this.state.isEditing}
                />
                <RaisedButton onClick={this.onAddTask.bind(this)} label="Add Task" primary={true} disabled={this.state.isEditing} />
                <br />
                {this.errorAddValidation()}
                {this.errorAddValidationNull()}
            </div>
        );

    }

    renderTasksPerUser() {
        const { user } = this.props;
        const { toggleTheTask } = this.props;
        return user.Todos.map((todo, index) => {
            if (user.Todos){
                const style = {
                    marginRight: 20,
                };
                const taskStyle = {
                    cursor: "pointer",
                    text: "larger"
                }
                const cbStyles = {
                    block: {
                        maxWidth: 250,
                    },
                    checkbox: {
                        marginBottom: 16,
                    },
                };
                if (!this.state.isEditing) {
                    let editClick = this.onEditClick.bind(this, todo.Id, todo.Task, user.UserId, todo.Completed);
                    let deleteClick = this.onDeleteClick.bind(this, todo.Id, user.UserId);
                    return (
                        <tbody key={todo.Id}>
                            <tr style={cbStyles.block}>
                                <td>
                                    <Checkbox style={cbStyles.checkbox} defaultChecked={todo.Completed} onClick={() =>
                                        (toggleTheTask(todo.Id, todo.Task, user.UserId, todo.Completed = !todo.Completed))}
                                        label={todo.Task} />
                                </td>
                                <td><RaisedButton label="Edit" onClick={editClick} default={true} style={style} /></td>
                                <td><RaisedButton label="Delete" onClick={deleteClick} secondary={true} style={style} /></td>
                            </tr>
                        </tbody>
                    );
                }
            }

        });
    }


    render() {
        const { user } = this.props;
        const tbCtrl = {
            padding: 8,
            textAlign: 'center'
        }
        const styles = {
            header: {
                color: '#1A237E',
                ':hover': {
                    color: '#00B8D4'
                },
                ':focus': {
                    color: '#00B8D4'
                },
                ':active': {
                    color: '#00B8D4'
                }
            },
            bgColor: {
                backgroundColor: '#B2DFDB'
            },
            saveDisplay: {
                display: this.state.isEditing ? 'block' : 'none'
            }
        };
        if (!user) {
            return (
                <h4>View user task</h4>
            );
        }
        return (
            <div style={(styles.bgColor)}>
                <table>
                    <tbody>
                        <tr>
                            <th style={tbCtrl}>ToDo List of</th>
                            <th style={tbCtrl}>Total Tasks</th>
                        </tr>
                        <tr>
                            <td style={tbCtrl}><h2>{user.Name}</h2></td>
                            <td style={tbCtrl}><h2>{this.renderTasksPerUser().length}</h2></td>
                        </tr>
                    </tbody>
                </table>

                {this.createTodo()}
                <hr />
                <table>
                    {this.renderTasksPerUser()}
                    {this.onEditControl()}
                </table>
                <div style={(styles.saveDisplay)}>
                    <input type="text"
                        ref="saveTask"
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                        placeholder={this.state.editTask}
                    />
                    <RaisedButton label="Cancel" onClick={this.onCancelClick.bind(this)} primary={true} />
                    <RaisedButton label="Save" onClick={this.onSaveClick.bind(this, this.state.idState, this.state.completed)}
                        secondary={true} /><br />
                    {this.errorEditValidation()}
                    {this.errorEditValidationNull()}
                </div><br />

                <Link to={"/"}  style={(styles.header)}>Back to homepage</Link><br /><br />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(duck, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);