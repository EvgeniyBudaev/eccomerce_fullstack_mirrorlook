import React from 'react'
import styles from './catalog.module.scss'
import CatalogContent from './catalogContent'

const Catalog: React.FC = () => {
  //console.log('[Catalog][props]', props)
  return (
    <section className={styles.catalog}>
      <div className={styles.container}>
        {/*<CatalogTop />*/}
        <div className={styles.inner}>
          {/*<CatalogAside />*/}
          <CatalogContent />
        </div>
      </div>
    </section>
  )
}

export default Catalog
