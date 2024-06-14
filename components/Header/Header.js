import  styles from "./Header.module.css"; 
import React from 'react';

export default function Header() {
    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src="/images/le-logo.svg" alt="Logo"></img>
            </div>
            <div className={styles.headerItems}>
                <a href="#">Study Abroad</a>
                <a href="#">Accommodation</a>
                <a href="#">Test Prep</a>
                <a href="#">Finance</a>
                <a href="#">Community</a>
                <a href="#">Products</a>
                <a href="#">More</a>
            </div>
            <div className={styles.rightIcons}>
                <img className={styles.searchIconNav} src="/images/searchIcon.svg" alt="search"></img>
                <img src="/images/phone.svg" alt="phone"></img>
                <img src="/images/profile.svg" alt="profile"></img>
            </div>
        </div>
    );
}
