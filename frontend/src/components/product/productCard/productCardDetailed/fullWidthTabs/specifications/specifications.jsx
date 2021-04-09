import React from 'react'
import {Link} from 'react-router-dom'
import {ROUTES} from '../../../../../../routes'
import styles from './specifications.module.scss'


const Specifications = (props) => {
  //console.log('[Specifications][props]', props)
  const {product} = props
  const {
    height,
    width,
    heightWithoutFrame,
    weightWithoutFrame,
    weight,
    typeOfMounting,
    typeOfInstallation,
    facet,
    form,
    appointment,
    materialMirror,
    materialFrame,
    colorMirror,
    baseColor,
    countryBrand,
    countryManufacturer,
    manufacturer
  } = product

  return (
    <div className={styles.specifications}>
      <div className={styles.items}>
        <div className={styles.title}>Габариты</div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Высота</span></div>
          <div className={styles.date}><span>{height} см</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Ширина</span></div>
          <div className={styles.date}><span>{width} см</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Размер внешний, с рамой</span></div>
          <div className={styles.date}><span>{width}*{height} см</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Размер зеркала без рамы</span></div>
          <div className={styles.date}><span>{weightWithoutFrame}*{heightWithoutFrame} см</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Вес</span></div>
          <div className={styles.date}><span>{weight} кг</span></div>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.title}>Форма и установка</div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Тип навески</span></div>
          <div className={styles.date}><span>{typeOfMounting}</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Тип установки</span></div>
          <div className={styles.date}><span>{typeOfInstallation}</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Наличие фацета</span></div>
          <div className={styles.date}><span>{facet ? 'Да' : ' Нет'}</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Форма</span></div>
          <div className={styles.date}><span>{form}</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Назначение</span></div>
          <div className={styles.date}><span>{appointment}</span></div>
        </div>
      </div>

      <div className={styles.items}>
        <div className={styles.title}>Материалы и цвет</div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Материал зеркала</span></div>
          <div className={styles.date}><span>{materialMirror}</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Материал рамы</span></div>
          <div className={styles.date}><span>{materialFrame}</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Цвет зеркала</span></div>
          <div className={styles.date}><span>{colorMirror}</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Цвет основы</span></div>
          <div className={styles.date}><span>{baseColor}</span></div>
        </div>
      </div>

      <div className={styles.items}>
        <div className={styles.title}>О производителе</div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Страна бренда</span></div>
          <div className={styles.date}><span>{countryBrand}</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Страна производства</span></div>
          <div className={styles.date}><span>{countryManufacturer}</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Производитель</span></div>
          <div className={styles.date}><span>{manufacturer}</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Гарантия</span></div>
          <div className={styles.date}><Link to={ROUTES.HOME}><span>Гарантийные условия</span></Link></div>
        </div>
      </div>

    </div>
  )
}

export default Specifications
