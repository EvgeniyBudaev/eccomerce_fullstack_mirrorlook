import React, { useEffect } from 'react'
import axios from 'axios'


const CategoriesScreen = () => {
  useEffect(() => {
    async function fetchCategories() {
      const {data} = await axios.get('/api/categories/')
      console.log('categories: ', data)
    }
    fetchCategories()
  }, [])

  return (
    <div></div>
  )
}


export default CategoriesScreen