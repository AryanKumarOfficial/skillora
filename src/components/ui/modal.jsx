// components/ui/modal.js

import React from "react";

const Modal = ({children, onClose}) => {
    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
            <div className="relative bg-white rounded-lg p-4 max-w-4xl w-full">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white font-bold text-2xl"
                >
                    &times;
                </button>
                <div className="relative w-full h-full">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
