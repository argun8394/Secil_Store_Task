import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState({});

    const productUrl = `https://fakestoreapi.com/products/${id}`;

    const { title, image, description, rating } = productDetails;

    console.log(productDetails);

    useEffect(() => {
        axios
            .get(productUrl)
            .then((res) => setProductDetails(res.data))
            .catch((err) => console.log(err));
    }, [productUrl]);

    return (
        <div className=" flex justify-center items-center ">
            <div className="container navBarPadding containerDiv ">
                <h1 className="text-center text-black text-2xl">{title}</h1>
                <div className="flex flex-col lg:flex-row  rounded-lg bg-gray-100 shadow-lg mt-4">
                    <img
                        className=" lg:w-1/3  h-96 lg:h-[500px] object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src={image}
                        alt="image"
                    />
                    <div className="flex flex-col justify-between p-6 ">
                        <div>
                            <h5 className="text-gray-900 text-xl font-medium mb-2">
                                Description
                            </h5>
                            <p className="text-gray-700 text-base mb-4">{description}</p>
                        </div>

                        <ul className="bg-gray-100 rounded-lg border border-gray-400 text-gray-900">
                            <li className="px-6 py-2 border-b border-gray-400 w-full">
                                {"Rate : " + rating?.rate}
                            </li>
                            <li className="px-6 py-2 border-b border-gray-400 w-full">
                                {"Rate Count : " + rating?.count}
                            </li>
                            <li className="px-6 py-2 border-gray-400 w-full rounded-t-lg">
                                <Link
                                    to={-1}
                                    className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
                                >
                                    Go Back
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div></div>
        </div>
    );
};

export default ProductDetail;
