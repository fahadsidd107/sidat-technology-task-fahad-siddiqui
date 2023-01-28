import React from 'react'
import styles from '@/styles/NavbarButton.module.css';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface navBtn{
icon:any
}

function NavbarButton({icon}:navBtn) {
  return (
    <div className={styles.mainButton}>
       <FontAwesomeIcon icon={icon}  className={styles.icon}/>
    </div>
  )
}

export default NavbarButton