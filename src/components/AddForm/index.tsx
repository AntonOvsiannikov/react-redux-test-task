import React from 'react';
import * as Yup from 'yup';
import {Formik,Form} from 'formik';
import './styles.scss';
import PageTitle from '../PageTitle';
import FormField from '../FormField'; 
import {IFormValue} from '../../types';
import { addProduct } from '../../http';
import { parseDateString } from '../../utils';

const regx = new RegExp(/^[a-zA-Z ]*$/);
const SubmitSchema = Yup.object().shape({
  title:Yup.string()
    .min(2,'Too Short!')
    .matches(regx, 'Please,also letter')
    .max(50,'Too Long!')
    .required('Required'),
  author:Yup.string()
    .min(2,'Too Short!')
    .matches(regx, 'Please,also letter')
    .max(50,'Too Long!')
    .required('Required'),
  releaseYear:Yup.date()
    .transform(parseDateString)
    .max(new Date())
    .required('Required'),
  rating:Yup.number()
    .min(1)
    .max(5)
    .positive()
    .integer()
    .required('Required'),
})
const initialValues:IFormValue = { 
  title:'',
  author:'',
  releaseYear:+'',
  rating:+''
}
const fieldInfoList = [
  {
    title:'Назва',
    name:'title',
    placeholder:'назву'
  },
  {
    title:'Автор',
    name:'author',
    placeholder:'автора'
  },
  {
    title:'Дата релізу',
    name:'releaseYear',
    placeholder:' дату релізу'
  },
  {
    title:'Рейтинг',
    name:'rating',
    placeholder:'рейтинг'
  }
]
const handlerSubmit = async(value:IFormValue) => {
  await addProduct(value);
}

const AddForm = () => {
  
  return (
    <div className='form'>
      <PageTitle title='Add product'/>
      <Formik
        validationSchema={SubmitSchema}
        initialValues={initialValues}
        onSubmit={value => handlerSubmit(value)}
      >
        {({errors,touched}) => (
          <Form className='form-wrapper'>
            {
              fieldInfoList.map(
                (arrItem,index) => <FormField key={index} errors={errors} touched={touched} fieldInfo={arrItem}/>
              )
            }
            <button type='submit'>Add product</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddForm;
