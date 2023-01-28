import React from 'react'
import styles from "@/styles/Home.module.css";

interface HeadingNI{
    text:string
}


function HeadingNormal({text}:HeadingNI) {
  return (
    <div>
        <h1 className={styles.normalHeading}>
        {text}
        </h1>
        </div>
  )
}

export default HeadingNormal