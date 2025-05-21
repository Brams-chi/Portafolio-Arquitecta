import React from 'react';

const Modal = ({ show, message, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-xl shadow-xl max-w-md w-full text-center">
        <p className="mb-4">{message}</p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
