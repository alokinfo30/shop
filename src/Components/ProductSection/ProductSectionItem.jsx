import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";
import { singleProduct } from "../../features/slices/productsSlice";
import { Link } from "react-router-dom";

const ProductSectionItem = ({
  id,
  img,
  name,
  description,  
  price,
  totalPrice,
}) => {
  const dispatch = useDispatch();
 
  return (
    <div>
      
      <Card className="w-96 relative" onClick={() => dispatch(singleProduct(id))}>
        <Typography
          variant="h4"
          className="mb-2 absolute -rotate-45 top-12 right-8 z-10 text-red-700"
        >
          SALE%
        </Typography>
        <Link to={`/filteredProducts/T-Shirts/` +  id}>
        <CardHeader floated={false} className="h-96">
          <img src={img} alt={name} />
        </CardHeader>
        </Link>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            {description}
          </Typography>
          <div className="flex justify-between items-center pt-4">
            
          </div>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Add to Cart" placement="bottom">
            <Button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    img: img,
                    description: description,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                    name: name,                    
                  })
                )
              }
              
            >
              Add to Cart
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
      
    </div>
  );
};

export default ProductSectionItem;
