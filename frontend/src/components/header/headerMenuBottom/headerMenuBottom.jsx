import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
// import * as CSS from 'csstype'
//import classNames from 'classnames'

import styles from './headerMenuBottom.module.scss'
import {ROUTES} from '../../../routes'
import {logout} from "../../../redux/actions/userLogoutActions"


const HeaderMenuBottom = () => {
  //const red = classNames(styles.red)
    const activeLink = {
    fontSize: '18px',
    lineHeight: 1.25,
    fontFamily: 'Montserrat',
    fontWeight: 500,
    pointerEvents: 'none',
    cursor: 'default',
  }
  // const activeLink: CSS.Properties = {
  //   fontSize: '18px',
  //   lineHeight: 1.25,
  //   fontFamily: 'Montserrat',
  //   fontWeight: 500,
  //   pointerEvents: 'none',
  //   cursor: 'default',
  // }

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  const dispatch = useDispatch()

  const logoutHandler = () => {
      dispatch(logout())
  }


  return (
    <div className={styles.headerMenuBottom}>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME} exact activeStyle={activeLink}>
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ABOUT} activeStyle={activeLink}>
              О магазине
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CATEGORIES} activeStyle={activeLink}>
              Категории
            </NavLink>
          </li>

          {userInfo ? (
            <div className='NavDropDown' id='username'>
              <Link to={ROUTES.PROFILE}>
                <p>{userInfo.name}</p>
              </Link>
              <div onClick={logoutHandler}>Выйти</div>
            </div>
          ): (
            <li>
            <NavLink to={ROUTES.LOGIN} activeStyle={activeLink}>
              Login
            </NavLink>
          </li>
          )}

          {userInfo && userInfo.isAdmin && (
              <div className='NavDropDown' id='adminmenu'>
                  <Link to={ROUTES.ADMIN + 'userlist'}>
                      <p>Users</p>
                  </Link>
                  <Link to={ROUTES.ADMIN + 'categories/'}>
                      <p>Categories</p>
                  </Link>
                  <Link to={ROUTES.ADMIN + 'orderlist'}>
                      <p>Orders</p>
                  </Link>
              </div>
          )}

          {/*<li>*/}
          {/*  <NavLink*/}
          {/*    to={ROUTES.CLEARANCE_SALE}*/}
          {/*    activeStyle={activeLink}*/}
          {/*    className={red}*/}
          {/*  >*/}
          {/*    Распродажа*/}
          {/*  </NavLink>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <NavLink to={ROUTES.DELIVERY} activeStyle={activeLink}>*/}
          {/*    Доставка и оплата*/}
          {/*  </NavLink>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <NavLink to={ROUTES.CONTACTS} activeStyle={activeLink}>*/}
          {/*    Контакты*/}
          {/*  </NavLink>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </div>
  )
}

export default HeaderMenuBottom
