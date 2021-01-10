import React from 'react';
import mcss from './ClassComponent.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Elements/forms/forms";



/*let maxLength10 = maxLength(10)
let maxLength5 = maxLength(5)*/

const Questionnaire = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'lastName'} placeholder={'Фамилия'} component={'input'} ></Field></div>
            <div><Field name={'Name'} placeholder={'Имя'} component={'input'} ></Field></div>
            <div><Field name={'fatherName'} placeholder={'Отчество'} component={'input'} ></Field></div>
            <div><Field name={'Sity'} placeholder={'Город'} component={'input'} ></Field></div>
            <div><Field name={'aboutMe'} placeholder={'С себе'} component={Textarea} ></Field></div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )}

const QuestionnaireForm = reduxForm({form: 'Questionnaire'})(Questionnaire)

class ClassComponent extends React.Component {
    plus = () => {this.props.plus()};
    minus = () => {this.props.minus()}

    onClick = (value) => {
        debugger
        this.props.sendQuestionnaire(value)
    }

    render() {
        return <div>
            <div><h1>Class Component Questionnaire</h1></div>
            <div>
                <div className={mcss.foto}>{this.props.foto}</div>
                <div>{this.props.status}{this.props.itog}</div>
                <button className={mcss.button} onClick={this.minus}>-1</button>
                <button className={mcss.button} onClick={this.plus}>+1</button>

                <QuestionnaireForm onSubmit={this.onClick}/>
            </div>


        </div>

    }
}

export default ClassComponent

