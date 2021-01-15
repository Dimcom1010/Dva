import React from 'react';


class RrofileStatus extends React.Component {


    state = {
        editMode: false,
        status:this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
                      })
    }


    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
debugger
       this.props.updateUserProfileThunkCreator(this.state.status)
    }

    onStatusChange =(e) => {
        this.setState({
            status:e.currentTarget.value
        })

    }
componentDidUpdate(prevProps, prevState, snapshot) {
       debugger
    if (prevProps.status!==this.props.status)
    {this.setState({
        status: this.state.status
    })
    }

}

    render() {
        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}> {this.props.status || '----'}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}></input>
                    </div>}
            </div>
        )
    }
}

export default RrofileStatus