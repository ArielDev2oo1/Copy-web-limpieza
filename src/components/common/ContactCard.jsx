import React from "react";

export default function ContactCard() {
  return (
    <article className=" bg-slate-400">
      <img className="text-black" src={Address} alt="" />
      <p>
        <strong>Address</strong>
      </p>
      <p>514 S. Gramercy PL. #14 Los Angeles, CA 90020</p>
    </article>
  );
}
