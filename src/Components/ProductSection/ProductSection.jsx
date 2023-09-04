import React from "react";
import { storeData } from "../../assets/data/dummyData";
import ProductSectionItem from "./ProductSectionItem";

const ProductSection = () => {
  return (
    <div>
     
      <div className="grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl">
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <ProductSectionItem
                id={product.id}
                name={product.name}
                img={product.img}
                description={product.description}
                price={product.price}
                totalPrice={product.totalPrice}                
              ></ProductSectionItem>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSection;
