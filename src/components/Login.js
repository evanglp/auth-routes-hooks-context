import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
// below import contexts
import { LoginContext } from '../contexts/LoginContext'
// below import styled-components
import styled from 'styled-components'

const FormWrapper = styled.div`
padding : 0 3em;
background-color : #ffffff;
height : 85vh;
>h1{
  margin : 1em 0;
  color : #9999ff;
}
`
const Form = styled.form`
display : flex;
flex-wrap : wrap;
margin : 0 auto 0;
justify-content : center;

>input {
  width : 100%;
  font-size : 1.5rem;
  padding : 1em;
  margin : 0.5em 0;
}

>input:first-child{
  margin-top : 0;
}

>input:last-child{
  border : 1px solid #ccd9ff;
  font-size : 1.5rem;
  width : 50%;
  margin-bottom : 0;
  background-color : #9999ff;
  color : #8080ff;
  cursor : pointer;
  border-radius : 10px;
}
`;

const Login = () => {

  const { user, handleChange, handleSubmit } = useContext(LoginContext) // context provided par 'LoginContext.js', propriétés et fonctions utilisées par ce composant qui y sont rattachées, y sont expliquées

  return user.loggedIn ? // ici permet de rediriger user après qu'il ait soumis le formulaire et par extension modifié le state user de 'LoginContext.js'
    (
      <Redirect to='/admin' />
    )
    :
    (
      <FormWrapper>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder='username' value={user.name} onChange={handleChange} />

          <input type="text" name="password" placeholder='password' value={user.password} onChange={handleChange} />

          <input type="submit" value="Sign in" />
        </Form>
      </FormWrapper>
    )
}

export default Login