import React from 'react';
import PropTypes from 'prop-types';

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className={`p-6 rounded-lg shadow-md text-center`}>
      <div className='w-12 h-12 mx-auto mb-4'>{icon}</div>
      <h3 className='text-lg font-semibold mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
}

// Validación de props con PropTypes
ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired, // icon debe ser un nodo de React y es requerido
  title: PropTypes.string.isRequired, // title debe ser un string y es requerido
  description: PropTypes.string.isRequired, // description debe ser un string y es requerido
};


