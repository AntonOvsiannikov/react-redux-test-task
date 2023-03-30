import {FormikErrors,FormikTouched} from 'formik';
import { IFormValue } from '../../types';

export interface FormFieldProps {
  fieldInfo:{title:string,name:string,placeholder:string},
  errors:FormikErrors<IFormValue>,
  touched:FormikTouched<IFormValue>
}
