import React, { useEffect, useState } from "react";
import oil from '../../../assets/images/product-images/oil.jpeg'
import doc from '../../../assets/images/product-images/doc.jpeg'
import material from '../../../assets/images/product-images/material.jpeg'

const Card = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productQuantities, setProductQuantities] = useState({});

  useEffect(() => {
    setSelectedProduct(products.find((product) => product.id === 1));
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const increment = () => {
    if (selectedProduct) {
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [selectedProduct.id]: (prevQuantities[selectedProduct.id] || 1) + 1,
      }));
    }
  };

  const decrement = () => {
    if (selectedProduct) {
      if (productQuantities[selectedProduct.id] > 1) {
        setProductQuantities((prevQuantities) => ({
          ...prevQuantities,
          [selectedProduct.id]: prevQuantities[selectedProduct.id] - 1,
        }));
      }
    }
  };

  const products = [
    {
     id: 1,
     name: "Crude Soybean Oil",
     description: "Crude Soybean Oil is a versatile and high-quality cooking oil that is perfect for both home and commercial use. It is made from common soybeans using a refined fractionation process, ensuring a high level of purity. The refinement process also adds to the shelf life of the oil, making it a go-to choice for all your cooking and seasoning needs. This multi-purpose oil can be used for frying, baking, sauting, and as a salad dressing, making it an essential ingredient in every kitchen. As an exporter, importer, manufacturer, and supplier, we offer the best quality Crude Soybean Oil that meets the highest standards of quality and purity.", 
     price: "200 INR/Kilograms",
     miniumOrderQuantity:'100 Kilograms',
     deliverytime:'10 Days',
     use:'Season, Cooking',
     usage:'Commercial',
     refiendtype:'Fractionated Oil',
     purity:'High',
     processing:'Refined',
     cultivationOil:'Common',
     supplyAbility:'5000 Per Month',
     paymentTerms:'Cash in Advance (CID)',
     src: oil,
   },
   {
    id: 2,
    name: "High Protein Soya Bean Meal Doc ",
    description: "High Protein Soya Bean Meal, also known as De-oiled Cake (DOC), is a byproduct of the Soya Oil manufacturing process. It is produced when most of the oil from soybeans gets extracted, leaving behind a product rich in protein, often up to 52%. This protein-rich product is in high demand from cattle feed manufacturers and the poultry industry due to its high protein and energy content. It’s also used extensively in feed for swine, dairy cattle, and aquaculture. ", 
    price: "180 INR/Kilograms",
    miniumOrderQuantity:'100 Kilograms',
    deliverytime:'10 Days',
    use:'Animal Feeding',
    usage:'Commercial',
    purity:'High',
    cultivationOil:'Common',
    supplyAbility:'5000 Per Month',
    paymentTerms:'Cash in Advance (CID)',
    src: doc,
  },
  {
    id: 3,
    name: "Indian Soya Bean Meal",
    description: "Indian Soya Bean Meal is a healthy supplement for promoting growth. Our powder-form meal is made from fresh, high-quality soya beans and contains zero moisture, ensuring maximum efficacy. It has no smell, making it easy to consume and blend with other foods. As an exporter, importer, manufacturer, and supplier, we take pride in our products consistency and quality. It is suitable for a wide range of diets and can be used as an ingredient in various dishes for a boost of nutrients. Get all the benefits of soya beans without any added hassle. Try Indian Soya Bean Meal today!", 
    price: "175 INR/Kilograms",
    miniumOrderQuantity:'100 Kilograms',
    deliverytime:'10 Days',
    use:'Heathycare supplement',
    usage:'supplement',
    purity:'High',
    cultivationOil:'Common',
    supplyAbility:'5000 Per Month',
    paymentTerms:'Cash in Advance (CID)',
    src: material,
  },
 ];

  return (
    <main className="min-h-screen  p-4 flex flex-col  md:justify-center items-center">
      <section className="w-full md:w-3/4 lg:w-2/3 xl:w-2/3 p-4 shadow-2xl rounded-lg relative border-4 border-white flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4 rounded-lg">
          <img
            src={selectedProduct ? selectedProduct.src : ""}
            alt={selectedProduct ? selectedProduct.name : ""}
            className="w-full max-h-screen md:h-screen lg:h-auto rounded-xl object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 text-black">
          <div>
            <p className="font-semibold text-black">Name:</p>
            <h1 className="text-3xl font-Poppins">
              {selectedProduct ? selectedProduct.name : ""}
            </h1>
          </div>
          <div>
            <p className="font-semibold text-black">Description:</p>
            <p className="text-1xl font-Poppins">
              {selectedProduct ? selectedProduct.description : ""}
            </p>
          </div>
          <div className="flex justify-between items-center py-2">
            <div>
              <p className="font-semibold text-black">Minimum Order Quantity :</p>
              <p className="text-xl font-Poppins">
                {selectedProduct ? selectedProduct.miniumOrderQuantity : ""}
              </p>
            </div>
            <div>
              <p className="font-semibold text-black">Delivery Time :</p>
              <p className="text-xl font-Poppins">
                {selectedProduct ? selectedProduct.deliverytime : ""}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center py-2">
            <div>
              <p className="font-semibold text-black">Use :</p>
              <p className="text-xl font-Poppins">
                {selectedProduct ? selectedProduct.use : ""}
              </p>
            </div>
            <div>
              <p className="font-semibold text-black">Usage :</p>
              <p className="text-xl font-Poppins">
                {selectedProduct ? selectedProduct.usage : ""}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center py-2">
            <div>
              <p className="font-semibold text-black">Refined Type :</p>
              <p className="text-xl font-Poppins">
                {selectedProduct ? selectedProduct.refiendtype : ""}
              </p>
            </div>
            <div>
              <p className="font-semibold text-black">Purity :</p>
              <p className="text-xl font-Poppins">
                {selectedProduct ? selectedProduct.purity : ""}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center py-2">
            <div>
              <p className="font-semibold text-black">Processing :</p>
              <p className="text-xl font-Poppins">
                {selectedProduct ? selectedProduct.processing : ""}
              </p>
            </div>
            <div>
              <p className="font-semibold text-black">Cultivation Type :</p>
              <p className="text-xl font-Poppins">
                {selectedProduct ? selectedProduct.cultivationOil : ""}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center py-2">
            <div>
              <p className="font-semibold text-black">Supply Ability :</p>
              <p className="text-xl font-Poppins">
                {selectedProduct ? selectedProduct.supplyAbility : ""}
              </p>
            </div>
            <div>
              <p className="font-semibold text-black">Payment Terms :</p>
              <p className="text-xl font-Poppins">
                {selectedProduct ? selectedProduct.paymentTerms : ""}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-black">Price:</p>
              <p className="text-xl font-Poppins">
                $ {selectedProduct ? selectedProduct.price : ""}
              </p>
            </div>
            <div className="w-40 h-10 bg-black from-cyan-500 to-blue-500 text-white rounded-full cursor-pointer hover:bg-white hover:border-2 hover:border-black hover:text-black flex justify-center items-center shadow-xl">
              <button type="button">Get A  Price / Quote </button>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center w-full md:w-1/2 mt-8 md:flex-row md:justify-center md:space-x-5">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-24 lg:h-36 rounded-xl cursor-pointer hover:rotate-6 duration-300 flex justify-center items-center shadow-xl mb-4"
              onClick={() => handleProductClick(product)}
            >
              <img
                src={product.src}
                alt={product.name}
                className="hover:-rotate-12 duration-500 w-32"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Card;