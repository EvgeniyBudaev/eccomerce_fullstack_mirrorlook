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
    type_of_mounting,
    type_of_installation,
    facet,
    form,
    appointment,
    material_mirror,
    material_frame,
    color_mirror,
    base_mirror,
    country_brand,
    country_manufacturer,
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
          <div className={styles.date}><span>{type_of_mounting}</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Тип установки</span></div>
          <div className={styles.date}><span>{type_of_installation}</span></div>
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
          <div className={styles.date}><span>{material_mirror}</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Материал рамы</span></div>
          <div className={styles.date}><span>{material_frame}</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Цвет зеркала</span></div>
          <div className={styles.date}><span>{color_mirror}</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Цвет основы</span></div>
          <div className={styles.date}><span>{base_mirror}</span></div>
        </div>
      </div>

      <div className={styles.items}>
        <div className={styles.title}>О производителе</div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Страна бренда</span></div>
          <div className={styles.date}><span>{country_brand}</span></div>
        </div>
        <div className={styles.item}>
          <div className={styles.line}></div>
          <div className={styles.naming}><span>Страна производства</span></div>
          <div className={styles.date}><span>{country_manufacturer}</span></div>
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
