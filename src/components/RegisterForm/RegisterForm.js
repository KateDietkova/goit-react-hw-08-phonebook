import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import Form from 'react-bootstrap/Form';
import {
  FormStyled,
  FormGroupPassword,
  ButtonPassword,
  ButtonSignUp,
  RegisterTitle,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    dispatch(register({ name, email, password }));
    console.log({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <FormStyled noValidate onSubmit={handleSubmit} validated={validated}>
      <RegisterTitle>Registration form</RegisterTitle>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="name"
          placeholder="Enter your name"
          onChange={handleChange}
          name="name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <FormGroupPassword>
          <Form.Control
            required
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            onChange={handleChange}
            name="password"
          />
          <ButtonPassword variant="light" h="1.75rem" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </ButtonPassword>
        </FormGroupPassword>
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text>
      </Form.Group>
      <ButtonSignUp type="submit">Sign up</ButtonSignUp>
    </FormStyled>
  );
};
