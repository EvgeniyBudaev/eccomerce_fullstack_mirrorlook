import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainLayout from "../layouts/mainLayout"
import {ROUTES} from '../../routes'
import AboutPage from '../about'
import CategoriesPage from "../pages/categoriesPage"
import CatalogPage from "../pages/catalogPage"
import ProductDetailsPage from "../pages/productDetailsPage"
import CartPage from "../pages/cartPage"
import LoginPage from "../pages/loginPage"
import RegisterPage from "../pages/registerPage"
import ShippingPage from "../pages/shippingPage"
import PaymentPage from "../pages/paymentPage"
import PlaceOrderPage from "../pages/placeOrderPage"
import OrderPage from "../pages/orderPage"
import ProfilePage from "../pages/profilePage"
import UserListPage from "../pages/userListPage"
import UserEditPage from "../pages/userEditPage"
import AdminCategoriesPage from "../pages/adminCategoriesPage"
import AdminCardsListPage from "../pages/adminCardsListPage"
import AdminProductEditPage from "../pages/adminProductEditPage"
import OrderListPage from "../pages/orderListPage"

const App: React.FC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path={ROUTES.CATEGORIES + ':category_slug/' + ':product_slug'} component={ProductDetailsPage} exact/>
        <Route path={ROUTES.CATEGORIES + ':category_slug/'} component={CatalogPage} exact />
        <Route path={ROUTES.CATEGORIES} component={CategoriesPage} exact />
        <Route path={ROUTES.ABOUT} component={AboutPage} />
        <Route path={ROUTES.CART} component={CartPage} />
        <Route path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.REGISTER} component={RegisterPage} />
        <Route path={ROUTES.PROFILE} component={ProfilePage} />
        <Route path={ROUTES.SHIPPING} component={ShippingPage} />
        <Route path={ROUTES.PAYMENT} component={PaymentPage} />
        <Route path={ROUTES.PLACE_ORDER} component={PlaceOrderPage} />
        <Route path="/order/:id" component={OrderPage} />

        <Route path={ROUTES.ADMIN + 'userlist'} component={UserListPage} />
        <Route path="/admin/user/:id/edit" component={UserEditPage} />
        <Route path="/admin/categories/:category_slug/:product_slug/edit" component={AdminProductEditPage} exact />
        <Route path="/admin/categories/:category_slug/" component={AdminCardsListPage} exact />
        <Route path="/admin/categories/" component={AdminCategoriesPage} />
        <Route path="/admin/orderlist/" component={OrderListPage} />
      </Switch>
    </MainLayout>
  )
}

export default App