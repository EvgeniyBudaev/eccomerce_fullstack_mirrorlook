import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainLayout from "../layouts/mainLayout"
import {ROUTES} from '../../routes'
import AboutPage from '../about'
import CategoriesPage from "../pages/categoriesPage"
import CatalogPage from "../pages/catalogPage"
import ProductDetailsPage from "../pages/productDetailsPage/productDetailPage"



const App: React.FC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path={ROUTES.CATEGORIES + ':category_slug/' + ':product_slug'} component={ProductDetailsPage} />
        <Route path={ROUTES.CATEGORIES + ':category_slug/'} component={CatalogPage} exact />
        <Route path={ROUTES.CATEGORIES} component={CategoriesPage} exact />
        <Route path={ROUTES.ABOUT} component={AboutPage} />
      </Switch>
    </MainLayout>
  )
}

export default App
