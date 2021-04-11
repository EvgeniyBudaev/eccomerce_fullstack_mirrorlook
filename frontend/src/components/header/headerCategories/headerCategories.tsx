import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import {
  categoriesListSelector,
  categoriesLoadedSelector,
  categoriesLoadingSelector,
} from '../../../redux/selectors'
import Loader from '../../loader'
import {RootStateType} from '../../../redux/reducers'
import {
  HeaderCategoriesPropsType,
  MapStatePropsCategoriesType
} from "../../../redux/types"
import {fetchCategories} from "../../../redux/actions/categoriesActions"
import styles from './headerCategories.module.scss'
import {ROUTES} from '../../../routes'



const HeaderCategories: React.FC<HeaderCategoriesPropsType> = (props) => {
  //console.log('[HeaderCategories][props]', props)
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
    <>
      <ul className={styles.headerCategories}>
        {categories.map(({id, name, category_slug}) => (
          <NavLink to={ROUTES.CATEGORIES + category_slug + '/'} key={id} activeClassName={styles.active}>
            <li
              className={styles.item}
            >
              {name}
            </li>
          </NavLink>
        ))}
      </ul>
    </>
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


export default connector(HeaderCategories)
