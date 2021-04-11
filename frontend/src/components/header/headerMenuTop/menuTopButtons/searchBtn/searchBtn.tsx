import React from 'react'
import cn from 'classnames'
import styles from './searchBtn.module.scss'
import IconSearch from '../../../../UI/icons/iconSearch'
import IconSearchClose from '../../../../UI/icons/iconSearchClose'

interface ISearchBtn {
  isClickedIconSearch: boolean,
  handleClickIconSearch: () => void
}

const SearchBtn: React.FC<ISearchBtn> = (props) => {
  const {isClickedIconSearch, handleClickIconSearch} = props

  const searchBtn = cn(styles.searchBtn, {[styles.hide]: isClickedIconSearch})
  const searchCloseBtn = cn(styles.searchCloseBtn, {[styles.active]: isClickedIconSearch})

    return (
      <>
        <button className={searchBtn} onClick={() => handleClickIconSearch()}>
          <IconSearch />
        </button>
        <button className={searchCloseBtn} onClick={() => handleClickIconSearch()}>
          <IconSearchClose />
        </button>
      </>
    )
  }


export default SearchBtn
