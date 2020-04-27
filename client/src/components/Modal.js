import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    //takes two args
    <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()} //STOP PROPAGATION OF PARENT ONCLICK
      >
        <div className="header">{props.title}</div>

        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal') //this is the 2nd arg, in index.html, sibling to #root
  );
};

export default Modal;
