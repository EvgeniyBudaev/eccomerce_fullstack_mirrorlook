import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {createStructuredSelector} from "reselect"

import styles from './categories.module.scss'
import CategoriesCard from './categoriesCard'
import LineInfo from '../lineInfo'
import { ROUTES } from '../../routes'
import { categoriesListSelector } from "../../redux/selectors"
import { ICategory } from "../../redux/types"


interface ICategories {
  categories: Array<ICategory>
}

const Categories: React.FC<ICategories> = (props) => {
  const {
    categories,
  } = props

  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {categories.map(({id, name, image, category_slug}) => (
            <NavLink to={ROUTES.CATEGORIES + category_slug + '/'} key={id}>
                <CategoriesCard name={name} image={image}/>
            </NavLink>
          ))}
        </div>
        <LineInfo />
      </div>
    </section>
  )
}


export default connect(
  createStructuredSelector({
    categories: categoriesListSelector,
  })
)(Categories)



