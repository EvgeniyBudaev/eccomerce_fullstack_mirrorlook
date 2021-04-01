import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'

import styles from './categories.module.scss'
import CategoriesCard from './categoriesCard'
import LineInfo from '../lineInfo'
import {ROUTES} from '../../routes'
import { fetchCategories } from '../../redux/actions/categoriesAction'
import {
  categoriesListSelector,
  categoriesLoadedSelector,
  categoriesLoadingSelector
} from "../../redux/selectors"
import Loader from "../loader"

const Categories = (props) => {
  const {
    categories,
    loadingCategories,
    loadedCategories
  } = props

  const dispatch = useDispatch()

  useEffect(() => {
    if (!loadingCategories && !loadedCategories) dispatch(fetchCategories())
  }, [dispatch,loadingCategories,loadedCategories])

  if (loadingCategories || !loadedCategories) return <Loader />

  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {categories.map(({id, name, image, slug}) => (
            <NavLink to={ROUTES.CATEGORIES + slug} key={id}>
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
    loadingCategories: categoriesLoadingSelector,
    loadedCategories: categoriesLoadedSelector,
  })
)(Categories)


