

import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export const PasswordInputField = ({handlePasswordValidation,handleClickShowPassword,isValidPassword,showPassword,password}) =>  <FormControl  variant="outlined" sx={{ '& .MuiOutlinedInput-root': {
    '& fieldset': {
        borderColor: `${password.length? isValidPassword ? 'green' : 'red' : ''}`,
    },
    '&:hover fieldset': {
        borderColor: `${password.length? isValidPassword ? 'green' : 'red' : ''}`,
      },
}}} fullWidth>
<InputLabel htmlFor="password">Password</InputLabel>
<OutlinedInput
  required
  id="password"
  name="password"
  value={password}
  type={showPassword ? 'text' : 'password'}
  onChange={handlePasswordValidation}
  color={isValidPassword ? 'success' : 'error'}
  endAdornment={
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        edge="end"
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  }
  label="Password"
/>
<FormHelperText id="password-helper-text" sx={{color:'red'}}>{isValidPassword ? '' : '* Password must be at least 8 characters and contains one uppercase letter, one lowercase letter, special character and numbers'}</FormHelperText>
</FormControl>
