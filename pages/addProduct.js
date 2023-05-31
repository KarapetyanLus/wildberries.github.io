import React from 'react'
import cls from "../styles/addProduct.module.scss"
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
const addProduct = () => {
    const [state, setState] = useState({
        price: "",
        sale: "",
        name: "",
        desc: "",
        link: "",
        delivery: "",
        salePercent: "",
    })

    const router = useRouter()
    const handleAddGood = (e) => {
        e.preventDefault();
        const data = {
            ...state
        };
        (async () => {
            await axios.post("http://localhost:4200/product", data)
        })().then(() => {
            router.push("/")
        })
    }

    const handleChange = (e) => {
        switch (e.target.name) {
            case "price":
                setState({
                    ...state,
                    price: e.target.value
                });
                break;
            case "sale":
                setState({
                    ...state,
                    sale: e.target.value
                });
                break;
            case "name":
                setState({
                    ...state,
                    name: e.target.value
                });
                break;
            case "desc":
                setState({
                    ...state,
                    desc: e.target.value
                });
                break;
            case "link":
                setState({
                    ...state,
                    link: e.target.value
                });
                break;
            case "delivery":
                setState({
                    ...state,
                    delivery: e.target.value
                });
                break;
            case "salePercent":
                setState({
                    ...state,
                    salePercent: e.target.value
                });
                break;
            default: break;
        }

    }
    return (
        <div className={cls.addProduct}>
            <div className={cls.goodForAdd}>
                <form>
                    <input
                        name='link'
                        placeholder='Link'
                        value={state.link}
                        type="text"
                        onChange={handleChange}
                    />
                    <div className={cls.pricePart}>
                        <input
                            name='price'
                            placeholder='Price'
                            value={state.price}
                            type="number"
                            onChange={handleChange}
                        />
                        <input
                            name='sale'
                            placeholder='Sale'
                            value={state.sale}
                            type="number"
                            onChange={handleChange}
                        />
                        <input
                            name='salePercent'
                            placeholder='Percent of sale'
                            value={state.salePercent}
                            type="number"
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        name='name'
                        placeholder='Name'
                        value={state.name}
                        type="text"
                        onChange={handleChange}
                    />
                    <div className={cls.textArea}>
                        <textarea
                            name='desc'
                            placeholder='Description'
                            value={state.desc}
                            type="text"
                            onChange={handleChange}
                        />
                    </div>

                    <input
                        name='delivery'
                        placeholder=' Delivery'
                        value={state.delivery}
                        type="text"
                        onChange={handleChange}
                    />
                    <div className={cls.addGoodBtn}>
                        <button onClick={handleAddGood}>Add Good</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default addProduct