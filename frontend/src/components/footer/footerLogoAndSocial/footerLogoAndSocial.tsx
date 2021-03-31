import React from 'react'
import styles from './footerLogoAndSocial.module.scss'
import FooterLogo from './footerLogo'
import Facebook from './facebook'
import VK from './vk'
import Instagram from './instagram'
import Twitter from './twitter'

const FooterLogoAndSocial: React.FC = () => {
  return (
    <>
      <div className={styles.footerLogo}>
        <FooterLogo />
      </div>
      <div className={styles.socialIcons}>
        <div className={styles.socialIcon}>
          <Facebook />
        </div>
        <div className={styles.socialIcon}>
          <VK />
        </div>
        <div className={styles.socialIcon}>
          <Instagram />
        </div>
        <div className={styles.socialIcon}>
          <Twitter />
        </div>
      </div>
    </>
  )
}

export default FooterLogoAndSocial
