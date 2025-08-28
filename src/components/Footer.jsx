import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="mt-8 bg-black px-20 py-10 text-white grid grid-cols-5">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-xl">Exclusive</h1>
          <p className="font-medium">Subscribe</p>
          <p className="text-sm">Get 10% off your first order</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold mb-2">Support</h1>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold mb-2"> Account</h1>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold mb-2">Quick Link</h1>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold mb-2"> Download App</h1>
          <p className="text-sm text-zinc-300">
            Save $3 with App New User Only
          </p>
        </div>
      </div>

      <hr className="text-gray-400" />
        <p className="text-sm text-center py-3 bg-black text-zinc-600">Copyright Rimel 2022. All right reserved</p>
    </div>
  );
};

export default Footer;
