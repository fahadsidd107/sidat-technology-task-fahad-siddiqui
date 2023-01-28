import React from 'react'
import Header from './header'
import styles from '@/styles/Banner.module.css'

function Banner() {
  return (
    <div>
      <div className={styles.headerDiv}>
      <Header/>
      </div>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
        <h1 className={styles.bannerh1}>Lorem ipsum Sed dolor Ded</h1>
        <h1 className={styles.bannerh2}>Elit, sed do eiusmod tempor and incididunt</h1>
<h1 className={styles.bannerh2}>umagna ad minim veniam, quis nostrud.</h1>
        </div>
<button className={styles.bannerButton}>Discover</button>
      </div>
    </div>
  )
}

export default Banner