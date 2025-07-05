import React, { useEffect, useState } from "react";
import imgDroan1 from "../../assets/3rdPageDronimg01.png";
import imgDroan2 from "../../assets/3rdPageDronimg02.png";
import imgDroan3 from "../../assets/3rdPageDronimg03.png";
import imgDroan4 from "../../assets/3rdPageDronimg04.png";
import imgDroan5 from "../../assets/3rdPageDronimg05.png";
import Container from "../../Layout/Container";
import { useParams } from "react-router";
import Product from "../../pages/Product";

const SingleProduDts = () => {
  const { id } = useParams();
  const [productData, setProducData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducData(data.products));
  }, []);

  const singleProduct = productData.find((Product) => Product.id == id);

  console.log(singleProduct);

  return (
    <div className="py-30">
      <Container>
        <div className="grid grid-cols-12 row space-x-4">
          <div className="col-span-2">
            <div className="flex flex-col gap-y-4">
              <div className="py-3 px-6 bg-gray-100 rounded">
                <img src={imgDroan1} alt="#imgDroan1" />
              </div>
              <div className="py-3 px-6 bg-gray-100 rounded">
                <img src={imgDroan1} alt="#imgDroan1" />
              </div>
              <div className="py-3 px-6 bg-gray-100 rounded">
                <img src={imgDroan1} alt="#imgDroan1" />
              </div>
              <div className="py-3 px-6 bg-gray-100 rounded">
                <img src={imgDroan1} alt="#imgDroan1" />
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <div className="pt-[133px] pb-[152px] px-[27px] bg-gray-100 rounded">
              <img src={imgDroan5} alt="#imgDroan5" />
            </div>
          </div>

          {/* product writing part div which is product show more deatios in writing */}

          <div className="col-span-4">
            <h2 className="font-secondary font-semibold text-[24px]">
              {singleProduct?.title}
            </h2>
            <p className="font-secondary  text-[24px] mb-6">
              ${singleProduct?.price}
            </p>
            <p className="font-primary">{singleProduct?.description}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProduDts;
