import React from 'react'
import cls from "./loadingPage.module.scss"

const LoadingPage = () => {
  return (
    <div className={cls.loadingPage}>
        <div className={cls.spinner}></div>
    </div>
  )
}

export default LoadingPage
