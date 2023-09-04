import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../features/slices/cartSlice";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  

  const { id } = useParams();
  const dispatch = useDispatch();

  return (
    <div>
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center py-10">
              <div className="pl-44 grow-[2]">
                <img
                  className="h-[850px] rounded-lg"
                  src={item.img}
                  alt={item.name}
                ></img>
              </div>
              <div className="grow-[3]">
                <div className="max-w-lg">
                                  
                  <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                    {item.description}
                  </p>
                 

                  
                  <Tooltip content="Add to Cart" placement="bottom">
                    <Button
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            name: item.name,
                            img: item.img,
                            description: item.description,                            
                            price: item.price,
                            amount: 1,
                            totalPrice: item.price,
                          })
                        )
                      }
                    >
                      Add to Cart
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;
