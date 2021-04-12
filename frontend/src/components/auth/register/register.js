import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {withRouter} from "react-router"

import FormContainer from "../../UI/form/formContainer"
import {ROUTES} from "../../../routes"
import Loader from "../../loader"
import {register} from "../../../redux/actions/userRegisterActions"



const Register = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const {location, history} = props
  const redirect = location.search ? location.search.split('=')[1] : ROUTES.HOME

  const userRegister = useSelector(state => state.userRegister)
  const {error, loading, userInfo} = userRegister

  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword) {
      setMessage("Пароли не совпадают!")
    } else {
      dispatch(register(name, email, password))
    }
  }

  useEffect(() => {
    if(userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  return (
    <FormContainer>
      <h2>Регистрация</h2>
      {message && <p style={{color: 'red'}}>{message}</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      {loading && <Loader />}

      <form onSubmit={submitHandler}>
        <div className="form__group">
          <label htmlFor="name_input">Name</label>
          <input
            id="name_input"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

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

        <div className="form__group">
          <label htmlFor="confirm_password_input">Confirm Password</label>
          <input
            id="confirm_password_input"
            type="password"
            placeholder="Enter Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type={"submit"}>Зарегистрироваться</button>
      </form>

      <div>
        Есть аккаунт?
        <Link to={redirect ? `${ROUTES.LOGIN}?redirect=${redirect}` : ROUTES.LOGIN}>Войти</Link>
      </div>
    </FormContainer>
  )
}

export default withRouter(Register)