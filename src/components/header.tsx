import React, { useState } from 'react'
import styles from '@/styles/Header.module.css';
import { Dropdown } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars, faGlobe, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import NavbarButton from './helperComponents/navbarButton';
import { topMenu } from '../constants/header.constants';
import { User } from "@nextui-org/react";


function Header() {
const [dropDown,setDropDown] = useState(false)
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Logo Here</div>
      <div>
      <Dropdown>
  <Dropdown.Trigger >
    <div className={styles.menuButtonDiv}>
    <div onClick={()=>setDropDown(!dropDown)} className={dropDown === true ?styles.buttonClicked : styles.mainButton}>
       <FontAwesomeIcon icon={faBars}  className={styles.icon}/>
    </div>
    <FontAwesomeIcon icon={faAngleDown}  className={dropDown === true ? styles.appear : styles.notAppear}/>
    </div>


  </Dropdown.Trigger>
      <Dropdown.Menu aria-label="Static Actions" className={styles.menu}>
        {topMenu.map((item)=>
            <Dropdown.Item key={item} className={styles.item} css={{color:"White"}}>{item}</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
      </div>
      <div className={styles.buttons}>
      <NavbarButton icon={faMagnifyingGlass}/>
      <NavbarButton icon={faGlobe}/>

      <User
        src="https://i.pravatar.cc/150?u=a092581d4ef9026700d"
        name=""
        size="md"
      />

      </div>
    </div>
  )
}

export default Header