import React, { useEffect, useState } from 'react'
import cls from "./HeaderMenu.module.scss"
import { goodInfo } from '../menuInfo/MenuInfo'
import { morePart } from '../menuInfo/MenuInfo'
import Dress from '@/svgs/dress'
import dress from '../images/dress.webp'

const HeaderMenu = () => {

  const [showMenu, setShowMenu] = useState(false)
  return (
    <div>
      <button className={cls.BurgerMenu}
        onClick={() => {
          setShowMenu(!showMenu)
        }}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`${cls.goodMenu} ${showMenu && cls.open}`}>
        <ul className={cls.inGoodMenu}>
          <li className={cls.doubleMenuLi}>
            <a>
              <span>
                <Dress width={17} height={17} color="grey" />
              </span>
              Женщинам</a>
            <div className={cls.doubleMenu}>
              <div className={cls.firstColumn}>
                <ul className={cls.doubleMenuStyle}>
                  <li className={cls.menuTitle}>Женщинам</li>
                  {
                    morePart.map((item, index) => {
                      return (
                        <li key={index}>
                          <a href={item.link} target="_blank">{item.sort}</a>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className={cls.menuImage}>
                <div style={{ backgroundImage: `url(${dress.src})` }}></div>
                <h3>Платья</h3>
              </div>
            </div>
          </li>
          {goodInfo.map((obj, index) => {
            return (
              <li key={index}>
                <a>
                  <span>{obj.icon}</span>
                  {obj.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default HeaderMenu