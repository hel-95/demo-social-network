import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { FormControl } from '../../common/FormsControls/FormsControls';


const maxLength100 = maxLengthCreator(100);
const Textarea = FormControl('textarea');


const AddMessageForm = props => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessageBody'}
                validate={[required, maxLength100]} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

 export default reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);

