import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainLayout from "../layouts/mainLayout"
import {ROUTES} from '../../routes'
import AboutPage from '../about'
import CategoriesPage from "../pages/categoriesPage"
import CatalogPage from "../pages/catalogPage"
import ProductDetailsPage from "../pages/productDetailsPage"
import BasketPage from "../pages/basketPage"
import LoginPage from "../pages/loginPage"
import RegisterPage from "../pages/registerPage"
import ShippingPage from "../pages/shippingPage"
import PaymentPage from "../pages/paymentPage"
import PlaceOrderPage from "../pages/placeOrderPage"


const App: React.FC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path={ROUTES.CATEGORIES + ':category_slug/' + ':product_slug'} component={ProductDetailsPage} exact/>
        <Route path={ROUTES.CATEGORIES + ':category_slug/'} component={CatalogPage} exact />
        <Route path={ROUTES.CATEGORIES} component={CategoriesPage} exact />
        <Route path={ROUTES.ABOUT} component={AboutPage} />
        <Route path={ROUTES.BASKET} component={BasketPage} />
        <Route path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.REGISTER} component={RegisterPage} />
        <Route path={ROUTES.SHIPPING} component={ShippingPage} />
        <Route path={ROUTES.PAYMENT} component={PaymentPage} />
        <Route path={ROUTES.PLACE_ORDER} component={PlaceOrderPage} />
      </Switch>
    </MainLayout>
  )
}

export default App
