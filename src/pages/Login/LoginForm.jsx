import React, { useEffect, useState } from 'react';
import ErrorMessage from './ErrorMessage';
import {
  TextField,
  InputAdornment,
  OutlinedInput,
  FormControl,
  IconButton,
  InputLabel,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
} from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import isEmail from 'validator/lib/isEmail';
import { theme } from '../../theme/theme';
import { Form } from './StyledForms';
import { Header } from './StyledForms';
import { useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useSelector } from 'react-redux';

function LoginForm(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, sertRemember] = useState(false);
  const { shades, anothers } = theme.palette;
  const [message, setMessage] = useState('');
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [dirty, setDirty] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth();

  const userToken = useSelector((state) => state.auth.accessToken);
  console.log(userToken);

  async function handleFormSubmit(event) {
    event.preventDefault();
    const { emailInput, passwordInput } = event.target.elements;
    try {
      await signInWithEmailAndPassword(
        auth,
        emailInput.value,
        passwordInput.value
      );
      navigate('/dashboard');
      {
        remember && localStorage.setItem(userToken);
      }
    } catch (error) {
      setMessage('Username or password wrong');
    }
  }
  function handleClose() {
    setMessage(null);
  }

  const handleChange = (event) => {
    const val = event.target.value;

    if (isEmail(val)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    setValue(val);
    props.handleChange(val, isValid);
  };
  return (
    <>
      <img
        src="../login_vector_1.png"
        alt="vector"
        style={{ position: 'absolute', left: '34%', top: '16%' }}
      />
      <Form
        width="340px"
        height="422px"
        position="relative"
        left="50%"
        right="50%"
        transform="translate(-50%, 50%)"
        border="8px"
        padding="34px"
        onSubmit={handleFormSubmit}
      >
        <Header>
          <QuestionAnswerIcon sx={{ width: '60px', height: '60px' }} />
          <h2 style={{ color: `${shades.black}` }}>Ominio</h2>
        </Header>
        <FormControl fullWidth={props.isFullWidth}>
          <TextField
            error={dirty && !isValid}
            size="small"
            variant="outlined"
            label="Email"
            sx={{ marginBottom: '30px', width: '268px' }}
            name="emailInput"
            onBlur={() => setDirty(true)}
            onChange={(e) => handleChange(e)}
            required
          />
        </FormControl>
        <div>
          <FormControl
            variant="outlined"
            size="small"
            sx={{ marginBottom: '34px', width: '268px' }}
          >
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              
              label="Password"
              type={showPassword ? 'text' : 'password'}
              name="passwordInput"
              required
              endAdornment={
                <InputAdornment position="start">
                  <IconButton
                    edge="end"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? (
                      <VisibilityOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            ></OutlinedInput>
          </FormControl>
        </div>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{ marginBottom: '20px', color: `${anothers.gray}` }}
            checked={remember}
            onClick={() => sertRemember(!remember)}
          />
        </FormGroup>

        <Button type="submit" variant="contained" sx={{ width: '268px' }}>
          Login
        </Button>
      </Form>
      <img
        src="../login_vector_2.png"
        alt="vector"
        style={{ position: 'absolute', right: '30%', top: '60%' }}
      />

      <ErrorMessage message={message} handleClose={handleClose} />
    </>
  );
}

export default LoginForm;
