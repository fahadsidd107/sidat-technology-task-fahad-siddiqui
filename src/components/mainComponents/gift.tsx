import React from 'react'
import styles from '@/styles/Banner.module.css'

function Gift() {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
        <h1 className={styles.bannerh1}>Ready to give the most
meaningful gift on earth?</h1>

        </div>
<button className={styles.bannerButton}>Discover</button>
      </div>
    </div>
  )
}

export default Gift