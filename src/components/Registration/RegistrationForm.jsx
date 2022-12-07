import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import onValidate from 'assets/ValidateSchema/onValidate';
import Button from 'components/Button/Button';
import Logo from 'components/Logo/Logo';
import RegBar from './RegBar';
import {
  FormContainer,
  Form,
  FormField,
  FormLabel,
  LogoContainer,
  ErrorText,
  IconMail,
  IconPassword,
  IconName,
} from 'components/AuthStyleForm/AutheticationForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const onSubmit = (values, onSubmitProps) => {};

  const onRegBtn = () => {};

  return (
    <FormContainer>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          name: '',
        }}
        validationSchema={onValidate}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <LogoContainer>
              <Logo />
            </LogoContainer>
            <FormLabel>
              <FormField
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="E-mail"
              />
              <IconMail />
              <ErrorMessage
                name="email"
                render={msg => <ErrorText>{msg}</ErrorText>}
              />
            </FormLabel>
            <FormLabel>
              <FormField
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
                onInput={evt => setPassword(evt.target.value)}
              />
              <IconPassword />
              <ErrorMessage
                name="password"
                render={msg => <ErrorText>{msg}</ErrorText>}
              />
            </FormLabel>
            <FormLabel>
              <FormField
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
              />

              <IconPassword />
              <RegBar password={password} />
              <ErrorMessage
                name="password"
                render={msg => <ErrorText>{msg}</ErrorText>}
              />
            </FormLabel>
            <FormLabel>
              <FormField
                type="text"
                name="name"
                value={values.username}
                onChange={handleChange}
                placeholder="First name"
              />
              <IconName />
              <ErrorMessage
                name="name"
                render={msg => <ErrorText>{msg}</ErrorText>}
              />
            </FormLabel>
            <Button main type="submit">
              Register
            </Button>
            <Button
              type="button"
              onClick={() => {
                navigate('/login');
              }}
            >
              Log In
            </Button>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default RegisterForm;
