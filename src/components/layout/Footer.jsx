import React from 'react'
import Logo from '../../assets/images/LogoF.png'
export default function Footer() {
  return (
    <section className="flex flex-col items-center justify-center py-4" style={{backgroundColor: 'rgb(1,158,225)'}}>
      <div className="mb-4">
        <img src={Logo} alt="Logo" className="mx-auto xs:w-52"  />
      </div>
      <hr className="w-full border-t border-gray-300 mb-4" />
      <div className="text-center text-white xs:text-sm">
        © Copyright - Maintenance and Cleaning 2024
      </div>
    </section>
  )
}
