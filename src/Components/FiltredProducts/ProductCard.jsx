import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/slices/productsSlice";
import { Link, useParams } from "react-router-dom";

const ProductCard = ({ id, name, description, img, price }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Link to={`/filteredProducts/T-Shirts/` + id}>
      <Card className="w-96" onClick={() => dispatch(singleProduct(id))}>
        <CardHeader color="blue" className="relative h-96">
          <img src={img} alt="img-blur-shadow" className="h-full w-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {name}
          </Typography>
          <Typography>{description}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">{price}$</Typography>
          
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
