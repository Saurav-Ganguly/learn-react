import React from 'react';
import './Modal.css'; // We'll create this CSS file

function Modal({ children, onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
