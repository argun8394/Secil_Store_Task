import React from 'react'
import { useNavigate } from "react-router-dom";


const ProductCard = ({ image, title, price, id }) => {
    let navigate = useNavigate();

    const formatter = (item) => {
        return Number(item).toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    };

    return (
        <div
            className="product"
            onClick={() => navigate("/details/" + id)}
        >
            <div className="flex w-full justify-center items-center">
                <img
                    src={image}
                    alt="product-card"
                />
            </div>
            <div className="flex flex-col align-baseline justify-between text-white gap-2 px-3  bg-[#080f36] relative h-[80px] ">
                <h5 className="line-clamp-1 ">{title}</h5>
                <p>Price: {formatter(price)} $</p>
                <button className=" border-2-[#080f36] bg-[#8179e9] absolute bottom-1 right-1 w-[100px] rounded-sm hover:bg-[#5047cf]"
                    onClick={() => navigate("/details/" + id)}
                >Details</button>
            </div>

        </div>
    )
}

export default ProductCard