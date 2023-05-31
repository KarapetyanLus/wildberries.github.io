import React, { useState } from 'react'
import cls from "../styles/login.module.scss"

const Login = () => {
  const [phone, setPhone] = useState("")
  return (
    <div className={cls.login}>
      <div className={cls.signInPage}>
        <h2>Войти или создать профиль</h2>
        <div>
          <div className={cls.phoneNumber}>
            <input type="number"
                    value={phone}
                    placeholder = "+374"
                    onClick={(e)=>{
                    setPhone(e.target.value)
                  }}
            />
          </div>
          <div className={cls.getCode}>
            <button>Получить код</button>
          </div>
          <div className={cls.otherComp}>
            <label>
              <input type="checkbox"/>              
              <label for="myCheckbox">Чужой компьютер</label>
            </label>
          </div>
            <p className={cls.contract}>Соглашаюсь 
              <a href=''>с правилами пользования торговой площадкой</a>
              <span>и</span>
              <a href=''>возврата</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login