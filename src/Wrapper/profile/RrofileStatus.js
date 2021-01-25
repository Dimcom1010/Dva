import React from 'react';

class RrofileStatus extends React.Component {

    state = {                     // создани локальный статус для хранения временных данных во время изменения статуса
        editMode: false,
        status:this.props.propsStatus
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

       this.props.updateUserProfileThunkCreator(this.state.status)
    }

    onStatusChange =(e) => {
        debugger
        this.setState({
            status:e.currentTarget.value
        })

    }
componentDidUpdate(prevProps, prevState, snapshot) {
       debugger
    if (prevProps.propsStatus!==this.props.propsStatus)
    {this.setState({
        status: this.props.propsStatus
    })
    }

}

    render() {
        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={(this.props.isOwser? this.activateEditMode: null)}> {this.props.propsStatus || '----'}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange}
                               autoFocus={true}
                               onBlur={this.deActivateEditMode}
                               value={this.state.status}></input>
                    </div>}
            </div>
        )
    }
}

export default RrofileStatus