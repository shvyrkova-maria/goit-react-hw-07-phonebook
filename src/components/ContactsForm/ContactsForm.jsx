import { nanoid } from 'nanoid';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import toast from 'react-hot-toast';
import { useAddContactMutation, contactApi } from 'services/contactApi';
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
  const { data } = contactApi.endpoints.fetchContacts.useQueryState(null, {});
  const [addContact] = useAddContactMutation();

  const handleAddContactOnSubmit = async newContact => {
    if (data?.some(({ name }) => name === newContact.name)) {
      toast.error(`Contact ${newContact.name} already exists`);
      return;
    }

    try {
      await addContact(newContact);
      toast.success(`Contact ${newContact.name} created`);
    } catch (error) {
      toast.error(error);
    }
  };

  let nameInputId = nanoid(3);
  let phoneInputId = nanoid(3);

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const { name, number } = values;
        handleAddContactOnSubmit({ name, number });
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
