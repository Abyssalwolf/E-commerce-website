// Products.js

import React from 'react';

const Product = ({ title,newPrice, category, imageUrl }) => {
  return (
    <div className="w-full relative group">
      <div className="w-full h-96 cursor-pointer overflow-hidden">
        <img className="w-full h-full object-cover group-hover:scale-110 duration-500" src={imageUrl} alt="productImg" />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">{title}</h2>
            <p className="font-titleFont text-base font-light">{category}</p>
          </div>
          <div className="text-sm relative w-28 flex justify-end overflow-hidden">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
             
              <p className="font-semibold">{newPrice}</p>
            </div>
            <p className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500">
              add to cart
              <span>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                </svg>
              </span>
            </p>
          </div>
        </div>
        <div>
    
        </div>
      </div>
      <div className="absolute top-4 right-0">
        
      </div>
      <div className="Toastify"></div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">DONT MISS OUT ON THESE BESTSELLERS</h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          WELCOME TO URBAN HUB WHERE YOUR CHOICE MEETS YOUR DESIRES
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10">
        <Product
          title="Long sleeve Jac"
         
          newPrice="$150"
          category="Women"
          imageUrl="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Product
          title="Jacket with wol"
          
          newPrice="$65"
          category="women"
          imageUrl="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Product
          title="Compact fashion"
          
          newPrice="$55.99"
          category="women"
          imageUrl="https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Product
          title="Blue jeans"
         newPrice="$50"
          category="Women"
          imageUrl="https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Product
          title="Long sleeve Jac"
        
          newPrice="$150"
          category="Women"
          imageUrl="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Product
          title="Long sleeve Jac"
          newPrice="$150"
          category="Women"
          imageUrl="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Product
          title="Long sleeve Jac"
         
          newPrice="$150"
          category="Women"
          imageUrl="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Product
          title="Long sleeve Jac"
          newPrice="$150"
          category="Women"
          imageUrl="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Product
          title="Long sleeve Jac"
          newPrice="$150"
          category="Women"
          imageUrl="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Product
          title="Long sleeve Jac"
          newPrice="$150"
          category="Women"
          imageUrl="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Product
          title="Long sleeve Jac"
          newPrice="$150"
          category="Women"
          imageUrl="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Product
          title="Long sleeve Jac"
          newPrice="$150"
          category="Women"
          imageUrl="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        {/* Add more Product components for other items */}
      </div>
    </div>
  );
};

export default Products;
