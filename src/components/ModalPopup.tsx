import {ModalProps} from "../Types/ModalProp.ts";

const Modal = ({ isVisible, onClose, imageUrl }: ModalProps) => {
    if (!isVisible) return null;

    return (
        <div className="modal-overlay " onClick={onClose}>
            <div className="modal-content rounded-b-2xl" onClick={(e) => e.stopPropagation()}>
                <img src={imageUrl} alt="Modal Content" className="rounded-b-2xl rounded-t-2xl " style={{width: "auto", height: "25rem"}} />
            </div>
        </div>
    );
};

export default Modal;