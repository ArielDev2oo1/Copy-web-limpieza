import React from "react";
import Prueba from "../../assets/images/men-cleaning.png";
export default function Contact() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-center text-2xl font-bold mb-6">Contact us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center items-center">
          <img
            src={Prueba}
            alt="Imagen de contacto"
            className="w-auto h-80 mb-4"
          />
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            DO NOT HESITATE TO CONTACT US FOR ANY TYPE OF QUERY
          </h3>
          <p className="mb-4">IT WILL BE A PLEASURE TO ASSIST YOU!</p>
          <form>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="w-full mb-4 p-2 border rounded"
            />
            <textarea
              placeholder="Enter your message"
              className="w-full mb-4 p-2 border rounded"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-14 mb-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <article>
          <p>
            <strong>Address</strong>
          </p>
          <p>514 S. Gramercy PL. #14 Los Angeles, CA 90020</p>
        </article>
        <article>
          <p>
            <strong>Phone Number</strong>
          </p>
          <p>+1(213)909-1735</p>
        </article>
        <article>
          <p>
            <strong>Fax</strong>
          </p>
          <p>+1(213)480-4887</p>
        </article>
        <article>
          <p>
            <strong>E-mail</strong>
          </p>
          <p>cr7776279@gmail.com</p>
        </article>
      </div>
    </div>
  );
}
