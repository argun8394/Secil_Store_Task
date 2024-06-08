import { clearProducts, getProducts } from "../../features/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import loadingGif from "../../assets/loading.gif";
import { useNavigate } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
import Category from "../category/Category";

const Products = () => {
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [limit, setlimit] = useState(30);
    const [selectedCategory, setSelectedCategory] = useState("");

    const dispatch = useDispatch();
    const { products, error, loading } = useSelector((state) => state.api);

    useEffect(() => {
        const category = selectedCategory === 'all' ? '' : selectedCategory;
        dispatch(getProducts({ category, limit: limit }));

        dispatch(getProducts())

        return () => {
            dispatch(clearProducts());
        };
    }, [selectedCategory, limit]);

    return (
        <div className="flex justify-center">
            <div className="container mb-[10px] navBarPadding containerDiv">
                {loading && (
                    <div className="flex  justify-center items-center ">
                        <img src={loadingGif} alt="loading" className="h-[400px]" />
                    </div>
                )}

                {(error && products.length < 0) && (
                    <div className="flex justify-center items-center ">
                        <h2 className="font-[700] text-[30px] text-red-700">
                            Products can not be fetched
                        </h2>
                    </div>
                )}

                {!loading && (
                    <div className="">
                        <Category
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />

                        <div className="flex justify-center items-center flex-wrap ">
                            {products.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
