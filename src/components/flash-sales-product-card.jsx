import React from "react";

const FlashSalesProductCard = ({ discount, name, price, oldPrice, rating, img }) => {
  return (
    <div className="w-[270px] h-[350px]">
      {/* Image + discount */}
      <div className="bg-[#F5F5F5] h-[250px] grid place-content-center relative rounded">
        <span className="bg-[#DB4444] rounded px-3 py-1 text-white text-xs absolute top-2 left-2">
          {discount}
        </span>
        <img src={img} alt={name} width={180} height={190} />
      </div>

      {/* Product info */}
      <div className="flex flex-col gap-2 mt-2">
        <p className="font-semibold">{name}</p>
        <p className="font-semibold">
          <span className="text-red-400">${price}</span>{" "}
          <span className="line-through">${oldPrice}</span>
        </p>
        <p className="text-sm text-gray-500">({rating})</p>
      </div>
    </div>
  );
};

export default FlashSalesProductCard;
