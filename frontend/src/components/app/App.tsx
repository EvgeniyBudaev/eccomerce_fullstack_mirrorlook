import React from 'react'
import { Route } from 'react-router-dom'

import Header from "../header"
import HomeScreen from "../../screens/homeScreen"
import ProductScreen from "../../screens/productScreen"
import CategoriesScreen from "../../screens/categoriesScreen"


const App: React.FC = () => {
  return <div>
    <Header />
    <Route path='/categories/' component={CategoriesScreen} />
      <Route path='/products/' component={HomeScreen} exact />
      <Route path='/products/:id' component={ProductScreen} />
  </div>
}

export default App
