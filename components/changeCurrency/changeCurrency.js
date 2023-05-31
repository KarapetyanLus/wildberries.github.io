import { allGoodsActions } from '@/store/slices/allGoodsSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import cls from "./changeCurrency.module.scss"

const ChangeCurrency = () => {

    const dispatch = useDispatch()

    const handleChangecurrency = (currency)=>{
        dispatch(allGoodsActions.changeCurrency(currency))
    }

    return (
        <div className={cls.changeCurrency}>
            <div className={cls.amd}>
                <div className={cls.red}></div>
                <div className={cls.blue}></div>
                <div className={cls.orange}></div>
            </div>
            <div className={cls.currencyAmd}>
                <span className={cls.currency}>AMD</span>
            </div>
            <div className={cls.moneyKinde}>
                <h2 className={cls.choice}>Выберите валюту</h2>
                <ul>
                    <li onClick={()=>{handleChangecurrency("AMD")}}>
                        <div className={cls.currencyFlag}>
                            <div className={cls.amd}>
                                <div className={cls.red}></div>
                                <div className={cls.blue}></div>
                                <div className={cls.orange}></div>
                            </div>
                            <span className={cls.amdType} >AMD</span>
                        </div>
                        <span>Армянский драм</span>
                    </li>
                    <li onClick= {()=>{handleChangecurrency("RUB")}}>
                        <div className={cls.currencyFlag}>
                            <div className={cls.amd}>
                                <div className={cls.white}></div>
                                <div className={cls.blue}></div>
                                <div className={cls.red}></div>
                            </div>
                            <div className={cls.amdType}>RUB</div>
                        </div>
                        <span>Российский рубль</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ChangeCurrency