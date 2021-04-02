import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomeScreen from "../../screens/homeScreen"
import ProductScreen from "../../screens/productScreen"
import MainLayout from "../layouts/mainLayout"
import {ROUTES} from '../../routes'
import AboutPage from '../about'
import CategoriesPage from "../pages/categoriesPage"
import CatalogPage from "../pages/catalogPage"


const App: React.FC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path={ROUTES.CATEGORIES} component={CatalogPage} />
        <Route path={ROUTES.ABOUT} component={AboutPage} />
        {/*<Route path='/products/' component={HomeScreen} exact />*/}
        {/*<Route path='/products/:id' component={ProductScreen} />*/}
      </Switch>
    </MainLayout>
  )
}

export default App
