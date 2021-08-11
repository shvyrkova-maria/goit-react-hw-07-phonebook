import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import * as actions from 'redux/contacts/contacts-actions';
import {
  FormContainer,
  Button,
  Label,
  ValidationMessage,
} from 'components/ContactsForm/ContactsForm.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string().phone('+38', true, 'Valid number type +380*********'),
});

function ContactsForm() {
  const dispatch = useDispatch();

  let nameInputId = nanoid(3);
  let phoneInputId = nanoid(3);

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const { name, number } = values;
        dispatch(actions.addContact({ id: nanoid(3), name, number }));
        resetForm();
      }}
    >
      <FormContainer>
        <Label htmlFor={`id-${nameInputId}`}>Name</Label>
        <Field
          name="name"
          type="text"
          id={`id-${nameInputId}`}
          placeholder="Name"
        />
        <ErrorMessage name="name" component={ValidationMessage} />

        <Label htmlFor={`id-${phoneInputId}`}>Number</Label>
        <Field
          name="number"
          type="tel"
          id={`id-${phoneInputId}`}
          placeholder="+380*********"
        />
        <ErrorMessage name="number" component={ValidationMessage} />

        <Button type="submit">Add contact</Button>
      </FormContainer>
    </Formik>
  );
}

export default ContactsForm;
