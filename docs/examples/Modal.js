import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Select from 'react-select';
import { colourOptions } from '../data';

export default class Modal extends Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  render() {
    return ReactDOM.createPortal(
      <div className="Modal">
        <div className="ModalOverlay">
          <div className="ModalContent">
            <div
              style={{
                width: 300,
                padding: 32,
                paddingTop: 420,
                paddingBottom: 500,
              }}
            >
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={colourOptions[0]}
                name="color"
                options={colourOptions}
                menuPlacement="auto"
                repositionOnScroll
                menuPortalTarget={document.body}
              />
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  }
}
