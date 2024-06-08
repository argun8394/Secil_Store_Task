import React, { useState } from "react";

const Category = ({ selectedCategory, setSelectedCategory }) => {
    const [isOpen, setIsOpen] = useState(false);

    const list = [
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
                    className="z-20 rounded-md min-w-[156px] h-[40px] gap-[2px] px-2 flex items-center justify-between font-[400] text-[14px] tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white "
                >
                    <span className={`border border-slate-500 px-4 w-full h-[30px] capitalize`}>
                        {!isOpen && !selectedCategory ? "Categories" : ""}
                        {!isOpen && selectedCategory ? selectedCategory : ""}
                    </span>
                </button>
                {isOpen && (
                    <div className="z-20 bg-[#00254F] opacity-100 absolute top-9 flex flex-col items-start p-2 w-[156px] rounded-b-md">
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
