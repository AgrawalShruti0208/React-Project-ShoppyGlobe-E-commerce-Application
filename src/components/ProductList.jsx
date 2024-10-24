import { useCustomFetch } from "../utils/useCustomFetch"
import { useEffect,useState} from "react"
import { ProductItem } from "./ProductItem";


import "./StyleSheets/StyleProductsListPage.css"


export function ProductList(){
    const FetchProducts_URL = 'https://dummyjson.com/products?delay=2500&limit=30&skip=80';
    
    const [ProductData,setProductData] = useState([]);

    const {fetchedData,err,isLoading} = useCustomFetch(FetchProducts_URL);

    useEffect(()=>{
        if(fetchedData){
            setProductData(fetchedData);
        
        }
    },[fetchedData]);

    

    if(err){ //if err is not null show error message
        return(<div className="box-customHook"><h2>Error occured in API call:</h2><p>{err}</p></div>) 
    }

    if(isLoading){ //if isLoading state TRUE display Loading Data
        return (
            <div className="LoadingPage">
            <p>LOADING PRODUCTS..</p>
        </div>
        )
    }


    if(ProductData){
        console.log("Product Data:",ProductData.products);
        return(
            <div className="ProductListPage">
                
                <div className="shadow">
                    <h1 className="highlighted-text-shadow">
                        Products
                    </h1>
                </div>
                
                
                
                <div className="ProductListDiv">
                    {ProductData.products && ProductData.products.map((item)=>{
                        
                        return <ProductItem key={item.id} productData={item}/>
                            
                    })}
                
                </div>
                
            </div>
        )
    }
    
}