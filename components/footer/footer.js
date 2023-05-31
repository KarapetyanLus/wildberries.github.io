import React, { useState } from 'react'
import cls from "./footer.module.scss"
import qrImg from "../images/qr.png"
import { footerBuyer, footerCompany, footerSites, footerProject, footerPartner } from '../footerData/footerData'
import Apple from '@/svgs/apple'
import GooglePlay from '@/svgs/googlePlay'
import Huawei from '@/svgs/huawei'
const Footer = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
        console.log("clicked")
    }

    return (
        <div className={cls.footer}>
            <div className={cls.footerTop}>
                <div className={cls.footerMenus}>
                    <div className={cls.MenuList}>
                        <div className={cls.menuTit}>
                            <a>Покупателям</a>
                            <button className={cls.footerBtnOpen}
                                onClick={handleOpen}>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        <ul className={`${open ? cls.show : ""}`}>
                            {
                                footerBuyer.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={item.link}>{item.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={cls.partnerProject}>
                        <div className={cls.MenuList}>
                            <div className={cls.menuTit}>
                                <a>Партнерам</a>
                                <button className={cls.footerBtnOpen}
                                    onClick={handleOpen}>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                            <ul className={`${open ? cls.show : ""}`} >
                                {
                                    footerPartner.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={item.link}>{item.name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className={cls.MenuList}>
                            <div className={cls.menuTit}>
                                <a>Наши проекты</a>
                                <button className={cls.footerBtnOpen}
                                    onClick={handleOpen}>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                            <ul className={`${open ? cls.show : cls.hide}`}>
                                {
                                    footerProject.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={item.link}>{item.name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={cls.MenuList}>
                        <div className={cls.menuTit}>
                            <a>Компания</a>
                            <button className={cls.footerBtnOpen}
                                onClick={handleOpen}>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        <ul className={`${open ? cls.show : ""}`}>
                            {
                                footerCompany.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={item.link}>{item.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={cls.MenuList}>
                        <div className={cls.menuTit}>
                            <a>Мы в соцсетях</a>
                            <button className={cls.footerBtnOpen}
                                onClick={handleOpen}>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        <ul className={`${open ? cls.show : ""} ${cls.MenuListUl}`}>
                            {
                                footerSites.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={item.link}>{item.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={cls.footerQR}>
                    <h2>Приложение Wildberries</h2>
                    <div className={cls.codeQR}>
                        <img src={qrImg.src} />
                        <p>Наведите камеру, чтобы скачать приложение</p>
                        <ul className={cls.footerApps}>
                            <li>
                                <a>
                                    <Apple/>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <GooglePlay />
                                </a>
                            </li>
                            <li>
                                <a>
                                    <Huawei/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cls.footerBottom}>
                <p>
                    <span>2004-2023 © Wildberries</span>
                    <span>— модный интернет-магазин одежды, обуви и аксессуаров. Все права защищены. Доставка по всей России.</span>
                </p>
                <p>
                    <a href='' className={cls.check}>Проверка совместимости</a>
                </p>
            </div>

        </div>
    )
}

export default Footer