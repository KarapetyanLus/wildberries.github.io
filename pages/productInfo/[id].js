import LoadingPage from '@/components/loadingPage/loadingPage'
import LeftArrow from '@/svgs/leftArrow'
import Star from '@/svgs/star'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import cls from "./productInfo.module.scss"
import { basketGoodActions } from '@/store/slices/basketGoodSlice'
import { useDispatch } from 'react-redux'
import { fetchData } from '@/store/slices/allGoods.api'


const ProductInfo = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    const [state, setState] = useState([])

    useEffect(() => {
        (async () => {
            const response = await axios.get(`http://localhost:4200/product?id=${router.query.id}`)
            const data = response.data
            setState(data)
        })()
    }, [router.query.id])

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const handleAddBasket = (e) => {
        e.preventDefault()
        dispatch(basketGoodActions.selected(state[0].id))
        router.push("/basket")

    }
    return (
        <>
            {
                state.length > 0 ? <>
                    <div className={cls.productInfo} key={state[0].id}>
                        <div className={cls.productInfoLeftPart}>
                            <div className={cls.titPart}>
                                <p className={cls.goHome}>
                                    <span onClick={() => {
                                        router.push("/")
                                    }}>
                                        <LeftArrow />
                                    </span>Главная</p>
                                <h2 className={cls.productName}>{state[0].productName} /
                                    <span className={cls.productDEsc}> {state[0].desc}</span>
                                </h2>
                            </div>
                            <div className={cls.productQuality}>
                                <div className={cls.stars}>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                                <a>отзывов</a>
                                <p>
                                    <span>Артикул: </span>
                                    <span>103742308</span>
                                </p>
                                <p className={cls.boughtQount}>Купили более 29 700 раз</p>
                            </div>
                            <div className={cls.productInfoImg}>
                                <div className={cls.proImg}>
                                    <img src={state[0].link} />
                                </div>
                                <div className={cls.aboutProduct}>
                                    <h2>Дополнительная информация</h2>
                                    <div>
                                        <p>Отзывов</p>
                                        <span>{state[0].reviews}</span>
                                    </div>
                                    <div>
                                        <p>Упаковка</p>
                                        <span>{state[0].package}</span>
                                    </div>
                                    <div>
                                        <p>Купили более </p>
                                        <span>{state[0].purchased} раз</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cls.productInfoRightPart}>
                            <div className={cls.priceCart}>
                                <p className={cls.productSalePrice}>
                                    <span className={cls.price}>
                                        {Math.floor(+(state[0].sale.replaceAll(/\D/g, '')) - +(state[0].sale.replaceAll(/\D/g, '')) * parseInt(state[0].salePercent) / 100)} драм
                                    </span>
                                    <span className={cls.sale}>{state[0].sale} драм</span>
                                </p>
                                <button onClick={(e) => {
                                    handleAddBasket(e)
                                }}> Добавить в корзину</button>
                                <p className={cls.delivery}><span>27-29 мая </span>доставка со склада Коледино WB</p>
                            </div>
                        </div>
                    </div>
                </> : <>
                    <LoadingPage />
                </>
            }
        </>
    )
}

export default ProductInfo