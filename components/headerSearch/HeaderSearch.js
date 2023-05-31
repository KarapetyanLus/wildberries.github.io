import React, { useState, useEffect, useRef } from 'react'
import cls from "./HeaderSearch.module.scss"
import useLocalStorage from "../useLocalStorage/useLocalStorage"
import useOnClickOutside from '../useOnClickOutside/useOnclickOutside'
import Search from '@/svgs/search'

const HeaderSearch = () => {

    const [searched, setSearched] = useLocalStorage("searched", [])
    const [searchedItems, setSearchedItems] = useState([])
    const [inputState, setInputState] = useState("")
    const [showHistory, setShowHistory] = useState(false)
    const divRef = useRef()
    useOnClickOutside(divRef, () => setShowHistory(false));    
    
    useEffect(() => {
        setSearchedItems(searched)        
    }, [searched])

    const handleChange = (e)=>{
        const value = e.target.value
        setInputState(value)
    }
    const handleSubmite = (e)=>{
        e.preventDefault()
        setInputState("")
        setSearched([...searched, inputState])        
    }
    
    return (
        <div className={cls.searchedForm}>
            <form onSubmit={handleSubmite}>
                <input
                    type="text"
                    value={inputState}
                    placeholder="Я ищу..."
                    style={{borderRadius: showHistory ? "28px 28px 0 0" : 28 }}
                    onChange={handleChange}
                    onClick={()=>{
                        setShowHistory(true)
                    }}
                />
                <div className={cls.searchImg}>               
                    <Search className={cls.searchIcon} width = {18} height = {18} color = 'rgba(255, 255, 255, 0.5)'/>          
                </div>
            </form>
            {showHistory && <div className={cls.searchMenu} 
                ref = {divRef}
                style = {{display: showHistory ? "flex" : "none"}}>
                    <ul>
                        <li onClick={()=>{setSearched([])}}
                            className = {cls.clearHistory}
                            style = {{display: (searchedItems == "") ? "none" : "block" }}
                            >Очистить историю</li>
                        {searchedItems.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>                   
            </div> }
                     
             
        </div>
    )
}

export default HeaderSearch