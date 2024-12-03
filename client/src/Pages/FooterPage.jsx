import React from 'react'
import styles from './FooterPage.module.css'
import order from '../assets/order2.png'
import snap from '../assets/Snapchat.png'
import facebook from '../assets/Facebook.png'
import tiktok from '../assets/TikTok.png'
import instagram from '../assets/Instagram.png'
import { Link } from "react-router-dom"
import badge from '../assets/app-store-badges.png'

export default function FooterPage() {
  return (
    <div className={styles.container}>
      <footer className={styles.foot}>
<div className={styles.part1}>
<img src={order} alt="" className={styles.order2}/>
<img src={badge} alt="" className={styles.badge}/>

<p className={styles.company}>Company # 490039-445, Registered with House of companies.</p>
</div>

<div className={styles.part2}>
<p className={styles.heading}>Get Exclusive Deals in your Inbox</p>
<div className={styles.gs}> <span className={styles.gmail}>youremail@gmail.com</span> <span className={styles.subscribe}>Subscribe</span></div>

<p className={styles.para}>we wont spam, read our <Link className={styles.paralink}>email policy</Link></p>
<div className={styles.para}>
<img src={facebook} alt="" />
<img src={instagram} alt="" />
<img src={tiktok} alt="" />
<img src={snap} alt="" />
</div>
</div>

<div className={styles.part3}>
  <h2 className={styles.heading}>Legal Pages</h2>
 <Link className={styles.links}>Terms and conditions</Link>
 <Link className={styles.links}>Privacy</Link> 
<Link className={styles.links}> Cookies </Link>
<Link className={styles.links}> Modern Slavery Statement</Link>
</div>
<div className={styles.part4}>
<h2 className={styles.heading}>Important Links</h2>
  <Link className={styles.links}> Get help</Link>
  <Link className={styles.links}>Add your restaurant</Link>
  <Link className={styles.links}>Sign up to deliver</Link>
  <Link className={styles.links}>Create a business account</Link>
  </div>
</footer>
<div className={styles.foot2}>
  <p >Order.uk Copyright 2024, All Rights Reserved.</p>
  <p className={styles.par1}> <span>Privacy Policy</span>  <span>Terms</span> <span>Pricing </span> <span> Do not sell or share my personal information</span></p>
</div>

    </div>
  )
}
