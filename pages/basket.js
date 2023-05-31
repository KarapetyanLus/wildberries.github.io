import { allGoodsSelector } from '@/store/slices/allGoodsSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../store/slices/allGoods.api'
import { basketGoodActions, basketSelector } from '../store/slices/basketGoodSlice'
import cls from "../styles/basket.module.scss"

const Basket = () => {
  const dispatch = useDispatch()
  const basketState = useSelector(basketSelector)
  const arr = basketState.selected.map(item => item)
  const allGoodState = useSelector(allGoodsSelector)

  const decrement = (e,id)=>{
    e.preventDefault()
    dispatch(basketGoodActions.removeProduct(id))
  }
 
  const increment =(e,id) => {
    e.preventDefault()
    dispatch(basketGoodActions.addProduct(id))
  }

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <div className={cls.basketParts}>
      <div className={cls.basketLeftPart}>
        <h2>Корзина <span>{basketState.count}</span></h2>
        {
          <div className={cls.saleProduct}>
            {
              basketState.data.map(({ 
                link,
                price,               
                sale,
                name,
                desc,
                id,
                rubPrice,
                count
              }) => {
                return (
                  <div key={id} className={cls.productInfo}>
                    <div className={cls.cartGoodInfo}>
                      <div className={cls.productImg}>
                        <img src={link} />
                      </div>
                      <div className={cls.nameProduct}>
                        <p className={cls.name}>{name} / {desc}</p>
                        <p className={cls.WB}>Коледино WB</p>
                      </div>
                    </div>
                    <div className={cls.countBtns}>
                      <button onClick={(e)=>{
                        increment(e, id)
                      }}>+</button>
                      <p>{count}</p>
                      <button onClick={(e)=>{
                        decrement(e, id)
                      }}>-</button>
                    </div>
                    <div className={cls.productPrice}>
                      <p className={cls.price}> {allGoodState.currency === "RUB" ? <span>{rubPrice} RUB </span>: <span>{price} AMD</span>}</p>
                      <p className={cls.sale}>{allGoodState.currency === "RUB" ? <span>{rubPrice}RUB</span> : <span>{sale}AMD</span>}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>          
        }
      </div>
      <div className={cls.basketRightPart}>
        <div className={cls.productCount}>
          <p>Товары {basketState.count}шт.</p>
          <p>{allGoodState.currency === "RUB" ? 
          <span>{basketState.data.reduce((acc,{rubPrice}) => {
            return acc + +(rubPrice.replaceAll(/\D/g,''));
          },0)} RUB</span>: <span>{basketState.data.reduce((acc,{price}) => {
            return acc + +(price.replaceAll(/\D/g,''));
          },0)} AMD</span>
            
        }</p>
        </div>
        <div>
          <p className={cls.total}>Итого</p>
          <p className={cls.total}>{allGoodState.currency === "RUB" ? 
          <span>{basketState.data.reduce((acc,{rubPrice}) => {
            return acc + +(rubPrice.replaceAll(/\D/g,''));
          },0)} RUB</span>: <span>{basketState.data.reduce((acc,{price}) => {
            return acc + +(price.replaceAll(/\D/g,''));
          },0)} AMD</span>
            
        }</p>
        </div>
        <div>
          <button className={cls.orderBtn}>Заказать</button>
        </div>
        <p className={cls.contract}>Соглашаюсь 
              <a href=''>с правилами пользования торговой площадкой</a>
              <span>и</span>
              <a href=''>возврата</a>
          </p>
      </div>
    </div>


  )
}

export default Basket