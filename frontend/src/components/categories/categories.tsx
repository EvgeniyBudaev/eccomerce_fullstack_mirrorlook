import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import styles from './categories.module.scss'
import CategoriesCard from './categoriesCard'
import LineInfo from '../lineInfo'
import { ROUTES } from '../../routes'
import { fetchCategories } from '../../redux/actions/categoriesAction'
import {
  categoriesListSelector,
  categoriesLoadedSelector,
  categoriesLoadingSelector
} from "../../redux/selectors"
import Loader from "../loader"
import { CategoriesPropsType, MapStatePropsCategoriesType } from "../../redux/types"
import { RootStateType } from "../../redux/reducers"


const Categories: React.FC<CategoriesPropsType> = (props) => {
  const {
    categories,
    loadingCategories,
    loadedCategories,
    fetchCategories
  } = props

  useEffect(() => {
    if (!loadingCategories && !loadedCategories) fetchCategories()
  }, [loadingCategories, loadedCategories, fetchCategories])

  if (loadingCategories || !loadedCategories) return <Loader />

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


const mapStateToProps = (state: RootStateType): MapStatePropsCategoriesType => {
  return {
    categories: categoriesListSelector(state),
    loadingCategories: categoriesLoadingSelector(state),
    loadedCategories: categoriesLoadedSelector(state),
  }
}

const connector = connect(mapStateToProps, {fetchCategories})


export default connector(Categories)



