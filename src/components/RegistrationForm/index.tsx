import React, {
  useState
} from 'react';

export default function LoginForm(): React.ReactElement {

  const [loginState, setLoginState] = useState({
    isRegistered: false,
    inviteCode: '',
    login: '',
    password: '',
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setLoginState({
      ...loginState, isRegistered: true
    })
    console.log(loginState)
    // logic
  };

  const handleChange = (event: React.FormEvent<HTMLFormElement>): void => {
    setLoginState({
      ...loginState, [event.target.name]: event.target.value
    })
  }

  return (
    <form id='LoginForm' onSubmit={handleSubmit}>
      <input
        type='text'
        name='inviteCode'
        placeholder='invite code'
        value={loginState.inviteCode}
        onChange={handleChange}
      />
      <input
        type='text'
        name='login'
        placeholder='login'
        value={loginState.login}
        onChange={handleChange}
        />
      <input
        type='password'
        name='password'
        placeholder='password'
        value={loginState.password}
        onChange={handleChange}
      />
      <input type='submit' value='Login' />
    </form>
  )
}
