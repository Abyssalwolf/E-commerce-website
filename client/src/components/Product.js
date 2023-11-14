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
          title="Burberry"
         
          newPrice="$150"
          category="Women"
          imageUrl="https://www.net-a-porter.com/variants/images/1647597318356086/ou/w358_q60.jpg"
        />
        <Product
          title="Hurley jean"
          
          newPrice="$65"
          category="women"
          imageUrl="https://is4.revolveassets.com/images/p4/n/d/ROFR-WJ46_V4.jpg"
        />
        <Product
          title="Sweatshirt"
          
          newPrice="$55.99"
          category="women"
          imageUrl="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2F63%2F5a63e379c5b780ca1b75a9ffcf759311aa4a1e50.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
        />
        <Product
          title="Baggy T-shirt"
         newPrice="$50"
          category="Women"
          imageUrl="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcf%2F86%2Fcf86ad6040e311fb7f3ddf64f6a3dc66851c5780.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
        />
        <Product
          title="trouser set and top"
        
          newPrice="$70"
          category="Kids"
          imageUrl="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F28%2F20%2F28205c6836c793c380eb251bb0d189f1f6ac1b02.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
        />
        <Product
          title="2 piece cotton set"
          newPrice="$44.8"
          category="Kids"
          imageUrl="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fab%2Fb2%2Fabb2315ed7a538fe8193e8f7699182d7de2c9951.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
        />
        <Product
          title="printed sweatshirt"
         
          newPrice="$50"
          category="Kids"
          imageUrl="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F04%2F88%2F0488f205dabe7b9589015dfa62e3faf58f3a68f4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
        />
        <Product
          title="Tulle dress"
          newPrice="$88.99"
          category="Kids"
          imageUrl="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc4%2F75%2Fc4759c8bb3a0b030a2ca8b8ffa7606dedd4f5f43.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
        />
        <Product
          title="teddy jacket"
          newPrice="$200"
          category="Men"
          imageUrl="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F17%2F82%2F1782d4c4ef0dad7e56435a3b75e35d300dfa75c4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
        />
        <Product
          title="flannel shirt"
          newPrice="$150"
          category="Men"
          imageUrl="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F27%2F25%2F27258d7e45094960c65d609ccfe0c02d356ebaef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
        />
        <Product
          title="black jean"
          newPrice="$90"
          category="Men"
          imageUrl="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F62%2Fee%2F62ee46d755fa18d6b48018a3b4ddb6710edd6e8e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
        />
        <Product
          title="Hoodie"
          newPrice="$99"
          category="Men"
          imageUrl="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F5d%2F8f%2F5d8fd0b89f9f0fe71af936d9ca687b53b3bc410e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
        />
        {/* Add more Product components for other items */}
      </div>
    </div>
  );
};

export default Products;
