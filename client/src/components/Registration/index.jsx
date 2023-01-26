
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InputLabel } from '@mui/material';
import { useState } from 'react';
import { validatePhoneNumber,validateEmail,validateName,passwordValidator, passwordMatched,validBirthDate } from '../../features/validators/Validator';
import { PasswordInputField } from '../PasswordInput';

const theme = createTheme();
export const Registration = () => {

    const [isCompany, setIsCompany] = useState(false)
    const [credential, setCredential] = useState({
      firstName:'',
      lastName:'',
      companyName:'',
      password:'',
      passwordConfirmation:'',
      age:'',
      phoneNumber:'',
      email:'',
      location:'',
      gender:'',
    })
    const [validations, setValidations] = useState({
      isValidFirstName:false,
      isValidLastName:false,
      companyName:'',
      isValidPassword:true,
      isPasswordsMatched:true,
      isValidAge:false,
      isValidPhone:false,
      isValidEmail:false,
    })
    const [showPassword, setShowPassword] = useState(false)

    const roleChanged = () => {
      setCredential({
        firstName:'',
        lastName:'',
        password:'',
        passwordConfirmation:'',
        age:'',
        phoneNumber:'',
        email:'',
        location:'',
        gender:'',
      })
      setValidations({
        isValidFirstName:false,
        isValidLastName:false,
        isValidPassword:true,
        isPasswordsMatched:true,
        isValidAge:false,
        isValidPhone:false,
        isValidEmail:false,
      })
    }

    const conditionsMet = () => {
    if(credential.gender){
      return (credential.gender.length && validations.isValidLastName && validations.isValidFirstName && validations.isValidEmail && validations.isValidPhone && validations.isPasswordsMatched && validations.isValidAge)
    }
    return (validations.isValidFirstName && validations.isValidEmail && validations.isValidPhone && validations.isPasswordsMatched) 
    }
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handlePasswordValidation = (event) => {
      const validPassword = passwordValidator(event.target.value);
      setCredential(value => {
        return {...value,password:event.target.value}
      })
      setValidations(value => {
        return{...value, isValidPassword:validPassword}
      });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(credential);
      };
    
      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 2,
                marginBottom: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              </Avatar>
              <Typography component="h1" variant="h5">
                Register
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <ButtonGroup variant="outlined" aria-label="outlined primary button group" fullWidth>
                      <Button variant={!isCompany? "contained" : "outlined"} onClick={(event) => {
                        roleChanged()
                        setIsCompany(false)
                        }}>Individual</Button>
                      <Button variant={isCompany? "contained" : "outlined"} onClick={(event) => {
                        roleChanged()
                        setIsCompany(true)
                        }}>Company</Button>
                    </ButtonGroup>
                  </Grid>
                  <Grid item xs={12} sm={isCompany? 12 : 6}>
                    <TextField
                      name={isCompany? "companyName" : "firstName"}
                      required
                      value={credential.firstName}
                      onChange={event => {
                        setCredential(value => {
                          return {...value,firstName:event.target.value}
                        })
                        const isValidFirst = validateName(event.target.value)
                        setValidations(value => {
                          return {...value, isValidFirstName: isValidFirst}
                        })
                      }}
                      sx={{ '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: `${(credential.firstName.length)? validations.isValidFirstName ? 'green' : 'red' : ''}`,
                        },
                        '&:hover fieldset': {
                            borderColor: `${(credential.firstName.length)? validations.isValidFirstName ? 'green' : 'red' : ''}`,
                          },
                    }}}
                      helperText = {!(credential.firstName.length)? "" : validations.isValidFirstName? "": "* Name must only contains letters"}
                      fullWidth
                      id={isCompany? "companyName" : "firstName"}
                      label={isCompany? "Company name":"First name"}
                    />
                  </Grid>
                  {isCompany? <></>:<Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      value={credential.lastName}
                      onChange={event => {
                        setCredential(value => {
                          return {...value,lastName:event.target.value}
                        })
                        const isValidLast = validateName(event.target.value)
                        setValidations(value => {
                          return {...value, isValidLastName: isValidLast}
                        })                      }}
                      sx={{ '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: `${credential.lastName.length? validations.isValidLastName ? 'green' : 'red' : ''}`,
                        },
                        '&:hover fieldset': {
                            borderColor: `${credential.lastName.length? validations.isValidLastName ? 'green' : 'red' : ''}`,
                          },
                    }}}
                      helperText = {!credential.lastName.length? "" : validations.isValidLastName? "": "* Name must only contains letters"}
                      id="lastName"
                      label="Last name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid> }
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      value={credential.email}
                      onChange={event => {
                        setCredential(value => {
                          return {...value,email:event.target.value}
                        })
                        const isValid = validateEmail(event.target.value)
                        setValidations(value => {
                          return {...value, isValidEmail: isValid}
                        })                       }}
                      color = {validations.isValidEmail? "success" : "error"}
                      sx={{ '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: `${credential.email.length? validations.isValidEmail ? 'green' : 'red' : ''}`,
                        },
                        '&:hover fieldset': {
                            borderColor: `${credential.email.length? validations.isValidEmail ? 'green' : 'red' : ''}`,
                          },
                    }}}
                      label={isCompany? "Company Email" : "Email address"}
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <PasswordInputField  handlePasswordValidation={handlePasswordValidation} handleClickShowPassword={handleClickShowPassword} isValidPassword={validations.isValidPassword} showPassword={showPassword} password={credential.password}/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      value={credential.passwordConfirmation}
                      onChange={ (event)=>{
                        const matched = passwordMatched(credential.password,event.target.value)
                        setCredential(value => {
                          return {...value,passwordConfirmation:event.target.value}
                        })
                        setValidations(value => {
                          return {...value, isPasswordsMatched: matched}
                        })    
                      }}
                      color = {validations.isPasswordsMatched? 'success' : 'error'}
                      helperText = {validations.isPasswordsMatched? '' : '* Password must be matched'}
                      sx={{ '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: `${!credential.passwordConfirmation.length? '' : validations.isPasswordsMatched ? 'green' : 'red'}`,
                        },
                        '&:hover fieldset': {
                            borderColor: `${!credential.passwordConfirmation.length? '' : validations.isPasswordsMatched ? 'green' : 'red'}`,
                          },
                    }}}
                      name="confirmPassword"
                      label="Confirm password"
                      type="password"
                      id="confirmPassword"
                    />
                  </Grid>
                  {isCompany? <></> : <Grid item xs={12} sx={{display:"flex", alignItems:"start"}}>
                    <Grid item sm={4}>
                        <InputLabel sx={{textAlign:"start", marginBottom:1}}>Date of barth:</InputLabel>
                    </Grid>
                    <Grid item sm={8}>
                        <TextField
                            required
                            fullWidth
                            onChange={(event) => {
                              const validAge = validBirthDate(event.target.value)
                              setCredential(value => {
                                return {...value,age:event.target.value}
                              })
                              setValidations(value => {
                                return {...value, isValidAge: validAge}
                              })
                            }}
                            sx={{ '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                  borderColor: `${!credential.age.length? '' : validations.isValidAge ? 'green' : 'red'}`,
                              },
                              '&:hover fieldset': {
                                  borderColor: `${!credential.age.length? '' : validations.isValidAge ? 'green' : 'red'}`,
                                },
                          }}}
                            helperText = {!credential.age? '' : validations.isValidAge? "":"* Sorry, your age must be 18 or more"}
                            name="birthDate"
                            type="date"
                            id="birthDate"
                        />
                    </Grid>   
                  </Grid>}
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="phoneNumber"
                      value={credential.phoneNumber}
                      onChange={event => {
                        setCredential(value => {
                          return {...value,phoneNumber:event.target.value}
                        })
                        const isValid = validatePhoneNumber(event.target.value)
                        setValidations(value => {
                          return {...value, isValidPhone: isValid}
                        })                      
                      }}
                      sx={{ '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: `${credential.phoneNumber.length? validations.isValidPhone ? 'green' : 'red' : ''}`,
                        },
                        '&:hover fieldset': {
                            borderColor: `${credential.phoneNumber.length? validations.isValidPhone ? 'green' : 'red' : ''}`,
                          },
                    }}}
                      helperText= {!credential.phoneNumber.length? "" : validations.isValidPhone? "":"* Phone number must only contains numbers"}
                      label={isCompany? "Company phone number":"Phone number"}
                      type="tel"
                      pattern="[0-9]"
                      id="phoneNumber"
                    />
                  </Grid>
                  {isCompany? <></> :
                  <Grid item xs={12}>
                  <FormControl sx={{display:"flex"}}>
                    <FormLabel sx={{alignSelf: "start"}}>Gender</FormLabel>
                        <RadioGroup row  name="gender-group"     defaultValue="other">
                            <FormControlLabel value="female" control={<Radio />} label="Female" onClick={event => {
                              setCredential(value => {
                                return {...value,gender:event.target.value}
                              })
                              }} />
                            <FormControlLabel value="male" control={<Radio />} label="Male" onClick={event => {
                              setCredential(value => {
                                return {...value,gender:event.target.value}
                              })}}/>
                            <FormControlLabel value="other" control={<Radio />} label="Prefer not to say" onClick={event => {
                              setCredential(value => {
                                return {...value,gender:event.target.value}
                              })}}/>
                        </RadioGroup>
                    </FormControl>
                  </Grid>}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="address"
                      value={credential.location}
                      onChange={event => setCredential(value => {
                        return {...value,location:event.target.value}
                      })}
                      label={isCompany? "Company location" :"Address"}
                      type="text"
                      id="address"
                    />
                  </Grid>
                </Grid>
                {conditionsMet()? 
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>:<Button
                  type="submit"
                  fullWidth
                  disabled
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button> }
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );
}