import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useProductContext } from "./Context/ProductContext";
import PageNavigation from "./PageNavigation";
import FormatPrice from "./Helpers/FormatPrice";
import MyImages from "./MyImages";
import ProductInfo from "./ProductInfo";
const API = "https://api.pujakaitem.com/api/products";

const SingalProduct = () => {
    const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();

    console.log(singleProduct)
    const { id } = useParams()
    const { id: alias, company, name, price, description, category, stock, stars, reviews, image, colors } = singleProduct;
    console.log(id)

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`);
    }, [])

    if (isSingleLoading) {
        return <div className="">Loading....</div>
    }
    return (
        <>
            <PageNavigation title={name} className=""/>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-cente mt-[20px] md:h-[500px] h-fit gap-4 sm:gap-0 ">
            <MyImages image={image} />
            <ProductInfo colors={colors} singleProduct={singleProduct} namez={name}company={company} price={price} description={description} category={category} stock={stock} stars={stars} reviews={reviews}/>
            </div>
        </>
    )
};
export default SingalProduct;