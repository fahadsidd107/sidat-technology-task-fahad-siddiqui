import React from 'react'
import styles from "@/styles/Works.module.css";
import { works } from '@/constants/works.constant';
import Image from 'next/image';

function Works() {
  return (
    <div className={styles.works}>
        {
            works.map((work)=>(
                <>
                <div className={styles.item}>
                <Image src={work.image} alt="alt" />
                <h1 className={styles.title}>{work.title}</h1>
                <p>{work.desc}</p>
                </div>
              
                </>
            ))
        }
    </div>
  )
}

export default Works