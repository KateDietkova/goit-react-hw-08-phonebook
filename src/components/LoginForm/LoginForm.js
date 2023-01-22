import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {
  FormStyled,
  FormGroupPassword,
  ButtonPassword,
  ButtonLogin,
  LoginTitle,
} from './LoginForm.styled';
import { GoEyeClosed, GoEye } from 'react-icons/go';
import { toast } from 'react-toastify';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    if (email === '' || password === '') {
      toast.error('Please, fill in all fields');
      return;
    }
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <FormStyled noValidate onSubmit={handleSubmit} validated={validated}>
      <LoginTitle>Login</LoginTitle>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
            name="email"
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <FormGroupPassword>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              required
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              onChange={handleChange}
              name="password"
              minLength="8"
            />
          </FloatingLabel>
          <ButtonPassword variant="light" h="1.75rem" onClick={handleClick}>
            {show ? <GoEye size="20" /> : <GoEyeClosed size="20" />}
          </ButtonPassword>
        </FormGroupPassword>
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text>
      </Form.Group>
      <ButtonLogin type="submit">Log in</ButtonLogin>
    </FormStyled>
  );
};
