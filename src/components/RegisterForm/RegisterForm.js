import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import {
  FormStyled,
  FormGroupPassword,
  ButtonPassword,
  ButtonSignUp,
  RegisterTitle,
  FloatingLabelRegister,
  InputPasswordRegister,
} from './RegisterForm.styled';
import { GoEyeClosed, GoEye } from 'react-icons/go';
import { toast } from 'react-toastify';

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

    if (name === '' || email === '' || password === '') {
      toast.error('Please, fill in all fields');
      return;
    }

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (password.length < 7) {
      toast.error('Your password must be 7-20 characters long');
      return;
    }
    setValidated(true);

    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <FormStyled noValidate onSubmit={handleSubmit} validated={validated}>
      <RegisterTitle>Registration form</RegisterTitle>
      <Form.Group className="mb-3" controlId="formGroupName">
        <InputGroup>
          <InputGroup.Text>
            <FaUser size="20" />
          </InputGroup.Text>
          <FloatingLabel controlId="floatingName" label="Name">
            <Form.Control
              required
              type="text"
              placeholder="Enter your name"
              onChange={handleChange}
              name="name"
            />
          </FloatingLabel>
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <InputGroup>
          <InputGroup.Text>
            <MdEmail size="20" />
          </InputGroup.Text>
          <FloatingLabel controlId="floatingInput" label="Email address">
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              name="email"
            />
          </FloatingLabel>
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <FormGroupPassword>
          <InputGroup>
            <InputGroup.Text>
              <RiLockPasswordFill size="20" />
            </InputGroup.Text>
            <FloatingLabelRegister
              controlId="floatingPassword"
              label="Password"
            >
              <InputPasswordRegister
                required
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                onChange={handleChange}
                name="password"
                minLength="7"
              />
            </FloatingLabelRegister>

            <ButtonPassword variant="light" h="1.75rem" onClick={handleClick}>
              {show ? <GoEye size="20" /> : <GoEyeClosed size="20" />}
            </ButtonPassword>
          </InputGroup>
        </FormGroupPassword>
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 7-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text>
      </Form.Group>
      <ButtonSignUp type="submit">Sign up</ButtonSignUp>
    </FormStyled>
  );
};
