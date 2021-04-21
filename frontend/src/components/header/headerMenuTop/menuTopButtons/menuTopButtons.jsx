import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { RouteComponentProps } from 'react-router'
import {connect} from "react-redux"

import styles from './menuTopButtons.module.scss'
import IconBasket from '../../../UI/icons/iconBasket'
import {ROUTES} from '../../../../routes'



const mapStateToProps = state => ({
    itemsCount: state.cart.entities.reduce((acc, item) => acc + item.quantity, 0)
})

const connector = connect(mapStateToProps, null)


// type PropsType = RouteComponentProps
const MenuTopButtons = (props) => {
// const MenuTopButtons: React.FC<PropsType> = (props) => {
//     console.log('[MenuTopButtons][props]', props)
    const {itemsCount} = props

  return (
      <ul className={styles.menuTopButtons}>
        <li>
          <Link to={ROUTES.CART}>
            <IconBasket />
              {itemsCount}
          </Link>
        </li>
      </ul>
  )
}

export default withRouter(connector(MenuTopButtons))

