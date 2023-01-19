import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormStyled,
  FieldStyled,
  LabelStyled,
  ButtonStyled,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const initialValue = {
  name: '',
  phone: '',
};

let schema = yup.object().shape({
  name: yup
    .string()
    .required('Name may contain only letters, apostrophe, dash and spaces.'),
  phone: yup
    .number()
    .required(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .positive()
    .integer(),
});

export const ContactForm = () => {
  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleSubmit = (value, { resetForm }) => {
    let isName = false;
    if (items && items.length > 0) {
      items.forEach(({ name }) => {
        if (value.name.toLowerCase() === name.toLowerCase()) {
          alert(`${value.name} is already in contacts`);
          isName = true;
        }
      });
    }

    if (!isName) {
      dispatch(addContact(value));
      resetForm();
    }

  };

  return (
    <Formik
      initialValues={initialValue}
      validationScheme={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <LabelStyled htmlFor="name">
          Name
          <FieldStyled
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelStyled>
        <LabelStyled htmlFor="number">
          Number
          <FieldStyled
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelStyled>
        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    </Formik>
  );
};
