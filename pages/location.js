import React from 'react'
import cls from "../styles/location.module.scss"
import deliveryBanner from "../components/images/deliveryBanner.png"
import banner1 from "../components/images/banner1.png"
import banner2 from "../components/images/banner2.png"
import banner3 from "../components/images/banner3.png"
import { locationData } from './locationData'



const Location = () => {
  return (
    <div className={cls.location}>
      <div className={cls.locationTop}>
        <h2>Доставка</h2>
        <div className={cls.quickDelivery}>
          <div className={cls.text}>
            <h1 className={cls.bannerTit}>Быстро доставим любой Ваш заказ по всей России</h1>
            <div className={cls.aboutBunner}>
              <div className={cls.bannerInfo}>
                <img src={banner1.src}/>
                <p>Бесплатная доставка</p>
              </div>
              <div className={cls.bannerInfo}>
                <img src={banner2.src}/>
                <p>Доставка круглый год по всей России</p>
              </div>
              <div className={cls.bannerInfo}>
                <img src={banner3.src}/>
                <p>Возврат товара при примерке</p>
              </div>
            </div>
          </div>          
          <a>Узнать условия</a>      
          <div className={cls.imgBanner}>
            <img src={deliveryBanner.src}/>
          </div>
        </div>
      </div>
      <div className={cls.conditions}>
        <h2>Информация о доставке и пунктах выдачи</h2>
      <div className={cls.storeLocation}>
      <div className={cls.locationName}>
        {
          locationData.map((item, index)=>{
            return(
              <div className={cls.locationInfo} key = {index}>
                <p>{item.name}</p>
                <div className={cls.aboutQuality}>
                  <div className={cls.starImg}>
                    <img src={item.starUrl}/>
                  </div>
                  <span>{item.quality}</span>
                  <span className={cls.delivery}>{item.deliveryPoint}</span>
                </div>
              </div>
            )

          })
        }
      </div>
      <div className={cls.mapLocation}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72434.4355510724!2d37.381521547677316!3d55.43518592420205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aa84ee4fedc35%3A0x1461371650e8e0bd!2z1YrVuNWk1bjVrNW91a8sINWE1bjVvdWv1b7VodW11asg1bTVodaA1aYsINWM1bjWgtW91aHVvdW_1aHVtg!5e0!3m2!1shy!2sam!4v1684605191717!5m2!1shy!2sam" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>      
      </div>
   
      </div>      
    </div>
  )
}

export default Location