import React,{FC} from 'react';
import {Field,ErrorMessage} from 'formik';
import './styles.scss';
import { FormFieldProps } from './type';
import { IFormValue } from '../../types';

const FormField:FC<FormFieldProps> = ({errors,touched,fieldInfo}) => {
  return (
    <div className='field'>
      <label>{fieldInfo.title}</label>
      <Field
        className={errors[fieldInfo.name as keyof IFormValue] && touched[fieldInfo.name as keyof IFormValue] ?
        'bad' : '' }
        name={fieldInfo.name}
        placeholder={`Введіть ${fieldInfo.placeholder}`}
      >
      </Field>
      <ErrorMessage name={fieldInfo.name} render={ msg => <div className='field-error'>{msg}</div>}/>
    </div>
  );
};

export default FormField;
