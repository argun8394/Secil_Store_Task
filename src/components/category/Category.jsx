import React, { useState } from "react";

const Category = ({ selectedCategory, setSelectedCategory }) => {
    const [isOpen, setIsOpen] = useState(false);

    const list = [
        {
            id: 0,
            title: "all",
        },
        {
            id: 1,
            title: "electronics",
        },
        {
            id: 2,
            title: "jewelery",
        },
        {
            id: 3,
            title: "men's clothing",
        },
        {
            id: 4,
            title: "women's clothing",
        },
    ];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setIsOpen(false);
    };

    return (
        <div className="">
            <div className="relative flex flex-col items-start justify-start ">
                <button
                    onClick={(e) => setIsOpen(!isOpen)}
                    className=" rounded-md w-[156px] h-[40px] flex items-center justify-between font-[400] text-[14px] tracking-wider border-2 border-transparent active:border-white duration-300 active:text-white "
                >
                    <span className={`border border-slate-500  w-full h-[30px] capitalize rounded-md`} >
                        {!isOpen && !selectedCategory ? "Categories" : ""}
                        {!isOpen && selectedCategory ? selectedCategory : ""}
                    </span>
                </button>
                {isOpen && (
                    <div className="z-20 bg-[#00254F] opacity-100 absolute top-[35.7px] flex flex-col items-start p-2 w-[156px] rounded-b-md">
                        {list.map((item, i) => (
                            <div
                                className="flex w-full justify-between hover:bg-[#0059BC] cursor-pointer p-1"
                                key={i}
                                onClick={() => handleCategorySelect(item.title)}
                            >
                                <h3 className="font-[400] text-[14px] text-[#FFFFFF] capitalize">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Category;
