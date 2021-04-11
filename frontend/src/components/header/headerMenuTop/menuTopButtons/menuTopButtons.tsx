import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import styles from './menuTopButtons.module.scss'
import IconBasket from '../../../UI/icons/iconBasket'
import {ROUTES} from '../../../../routes'
import { RouteComponentProps } from 'react-router'




type PropsType = RouteComponentProps

const MenuTopButtons: React.FC<PropsType> = (props) => {

  return (
      <ul className={styles.menuTopButtons}>
        <li>
          <Link to={ROUTES.BASKET}>
            <IconBasket />
          </Link>
        </li>
      </ul>
  )
}

export default withRouter(MenuTopButtons)

