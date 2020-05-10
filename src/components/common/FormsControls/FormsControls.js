import React from 'react'
import classes from './FormsControls.module.scss'
import { Field, reduxForm } from 'redux-form'

export const FormControl = (Element) => ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : '')}>
            <Element {...input} {...props} />
            { hasError && <span>{error}</span> }
        </div>
    )
}

export const createField = (placeholder, name, validators, component, props={}, text="") => (
    <div>
        <Field placeholder={placeholder}
        name={name} validate={validators} component={component} {...props} /> {text}
 </div>
)
    


// export const Textarea = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
    
//     return (
//         <div className={classes.formControl + " " + (hasError ? classes.error : '')}>
//             <textarea {...input} {...props} />
//             { hasError && <span>{'some error'}</span> }
//         </div>
//     )
// }


// export const Input = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
    
//     return (
//         <div className={classes.formControl + " " + (hasError ? classes.error : '')}>
//             <input {...input} {...props} />
//             { hasError && <span>{'some error'}</span> }
//         </div>
//     )
// }

