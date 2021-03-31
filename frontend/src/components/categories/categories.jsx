import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'

import styles from './categories.module.scss'
import CategoriesCard from './categoriesCard'
import LineInfo from '../lineInfo'
import {ROUTES} from '../../routes'
import axios from "axios";

const Categories = (props) => {
  // const {
  //   categories,
  // } = props
  
    useEffect(() => {
    async function fetchCategories() {
      const {data} = await axios.get('/api/categories/')
      console.log('categories: ', data)
    }
    fetchCategories()
  }, [])

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


