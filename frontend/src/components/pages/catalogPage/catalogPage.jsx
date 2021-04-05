import React from 'react'
import {Route, Switch} from 'react-router'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {ROUTES} from "../../../routes"
import {fetchCategories} from "../../../redux/actions/categoriesAction"
import {categoriesListSelector} from "../../../redux/selectors"
import CategoriesPage from "../categoriesPage"
import Catalog from "../../catalog"


const CatalogPage = () => {
  return (
    <>
      <Switch>
        <Route path={ROUTES.CATEGORIES + ':slug'} component={Catalog} />
        <Route path={ROUTES.CATEGORIES} component={CategoriesPage} />
      </Switch>
    </>
  )
}

export default connect(  createStructuredSelector({
    categories: categoriesListSelector,
  }),
  {fetchCategories})(CatalogPage)


