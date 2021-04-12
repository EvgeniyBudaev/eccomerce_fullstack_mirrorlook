import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {withRouter} from "react-router"

import {login} from '../../../redux/actions/userActions'
import FormContainer from "../../UI/form/formContainer"
import {ROUTES} from "../../../routes"
import Loader from "../../loader"



const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const {location, history} = props
  const redirect = location.search ? location.search.split('=')[1] : ROUTES.HOME

  const userLogin = useSelector(state => state.userLogin)
  const {error, loading, userInfo} = userLogin

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  useEffect(() => {
    if(userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  return (
    <FormContainer>
      <h2>Авторизация</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {loading && <Loader />}

      <form onSubmit={submitHandler}>
        <div className="form__group">
          <label htmlFor="login_input">Email address</label>
          <input
            id="login_input"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label htmlFor="password_input">Password</label>
          <input
            id="password_input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type={"submit"}>Войти</button>
      </form>

      <div>
        Вы еще не зарегистрированы?
        <Link to={redirect ? `${ROUTES.REGISTER}?redirect=${redirect}` : ROUTES.REGISTER}>Зарегистрироваться</Link>
      </div>
    </FormContainer>
  )
}

export default withRouter(Login)