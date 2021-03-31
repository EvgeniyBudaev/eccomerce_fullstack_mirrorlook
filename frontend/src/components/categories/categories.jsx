import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import styles from './categories.module.scss'
import CategoriesCard from './categoriesCard'
import LineInfo from '../lineInfo'
import {ROUTES} from '../../routes'
import axios from "axios"
import { fetchCategories } from '../../redux/actions/categoriesAction'
import {listProductDetails} from "../../redux/actions/productActions";

const Categories = (props) => {
  // const {
  //   categories,
  // } = props

  //   useEffect(() => {
  //   async function fetchCategories() {
  //     const {data} = await axios.get('/api/categories/')
  //     console.log('categories: ', data)
  //   }
  //   fetchCategories()
  // }, [])

  const dispatch = useDispatch()
  const categoriesList = useSelector(state => state.categories)
  console.log('categoriesList', categoriesList)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/*{categories.map(({id, name, images}) => (*/}
          {/*  <NavLink to={ROUTES.CATEGORIES} key={id}>*/}
          {/*      <CategoriesCard name={name} images={images}/>*/}
          {/*  </NavLink>*/}
          {/*))}*/}
        </div>
        <LineInfo />
      </div>
    </section>
  )
}

export default Categories


