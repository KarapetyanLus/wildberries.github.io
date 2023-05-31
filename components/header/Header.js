import React, { useState, useEffect } from 'react'
import cls from "./Header.module.scss"
import HeaderMenu from '../bugerMenu/HeaderMenu'
import HeaderSearch from '../headerSearch/HeaderSearch'
import useScreenSize from '../useScreenSize/useScreenSize'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { basketSelector } from '../../store/slices/basketGoodSlice'
import Home from '@/svgs/home'
import Menu from '@/svgs/menu'
import Heart from '@/svgs/heart'
import User from '@/svgs/user'
import Cart from '@/svgs/cart'
import Location from '@/svgs/location'
import Search from '@/svgs/search'
import ChangeCurrency from '../changeCurrency/changeCurrency'



const Header = () => {
  const { width } = useScreenSize()
  const mySize = width <= 1360
  const basketState = useSelector(basketSelector)
  
  const [showMediaMenu, setShowMediaMenu] = useState(false)
  const [searchedText, setSearchedText] = useState('')
  const [showMediaSearched, setShowMediaSearched] = useState(false)
  
  const router = useRouter()
  return (
    <div className={cls.header}>
      <div className={cls.headerFirstLine}>
        <ul>
          <li className={cls.chouseCurrency}>
           <ChangeCurrency/>
          </li>
          <li>
            <Location width={16} height={16} color = 'rgba(255,255,255,.6)'/>
            <span>Москва</span>
          </li>
          <li className={cls.soldBtn}>
            <a>Продавайте на Wildberries</a>
          </li>
        </ul>
      </div>
      <div className={cls.headerSecondLine}>
        <div className={cls.headerLogo}>
          <HeaderMenu />
          <h1 onClick={() => {
            router.push("/")
          }}>WILDBERRIES</h1>
        </div>
        {mySize ? null : <HeaderSearch />}
        <div className={cls.hedaerRight}>
          <button className={cls.signIn} onClick={() => {
            router.push("/location")
          }}>
            <Location className={cls.iconStyle} width={28} height={28} color ='#fff' />
            <p>Адреса</p>
          </button>
          <button className={cls.signIn} onClick={() => {
            router.push("/login")
          }}>
            <User className={cls.iconStyle} width = {30} height = {30} color= '#fff'/>
            <p>Войти</p>
          </button>
          <button className={`${cls.signIn} ${cls.busket}`} onClick={() => {
            router.push("/basket")
          }}>
            <Cart className={cls.iconStyle} width={30} height={30} color = '#fff' />
            <p>Корзина</p>
            <span className={cls.count}>{basketState.count}</span>
          </button>
        </div>
        {mySize ? <HeaderSearch /> : null}
        <div className={cls.bottomMenu}>
          <button onClick={()=>{
            router.push("/")
          }}>
            <Home/>
          </button>
          <button>
            <Menu />
          </button>
          <button onClick={()=>{
            router.push("/basket")
          }}>
            <Cart width={20} height={20} color="grey" />
          </button>
          <button>
            <Heart />
          </button>
          <button>
            <User width={20} height = {20} color = 'grey' />
          </button>
        </div>
        <div className={cls.mediaSearch}
          onClick={() => {
            setShowMediaMenu(!showMediaMenu)
          }}>
          <Search width = {20} height = {20} color = 'grey' />
        </div>
        {showMediaMenu ? <div className={cls.mediaSearchMenu}>
          <div className={cls.mediaSearchInput}>
            <form>
              <input
                name="mediaSearch"
                placeholder='Search'
                value={searchedText}
                onChange={(e) => {
                  setSearchedText(e.target.value)
                }}
                onClick={() => {
                  setShowMediaSearched(true)
                }}
              />
            </form>
            <a onClick={() => {
              setShowMediaMenu(false)
            }}>Отмена</a>
            {
              showMediaSearched &&
              <div className={cls.mediaSearched}>
                <ul>
                  <li>{searchedText}</li>
                </ul>
              </div>
            }
          </div>
        </div> : ''}
      </div>
    </div>
  )
}

export default Header