import React, {useEffect} from 'react'
import {withRouter} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'

import styles from './catalog.module.scss'
import CatalogContent from './catalogContent'
import {listProducts} from "../../redux/actions/productActions";
import {categoriesListSelector} from "../../redux/selectors";

const Catalog = (props) => {
  console.log('[Catalog][props]', props)
  const {location, match} = props
  const dispatch = useDispatch()
  const productList = useSelector(state => state.products)

    useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const categories = useSelector(categoriesListSelector)
  const {restId} = match.params
  const category = categories.find((category) => category.slug === restId)
  console.log('[category] ', category)

  return (
    <section className={styles.catalog}>
      <div className={styles.container}>
        {/*<CatalogTop />*/}
        <h1>Catalog</h1>
        <div className={styles.inner}>
          {/*<CatalogAside />*/}
          <CatalogContent />
        </div>
      </div>
    </section>
  )
}

export default withRouter(Catalog)
