/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component} from "react";

import icons from "../../icons";
import insertDataBlock from "../../insertDataBlock";


export default class BlockButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileFieldId: btoa(Math.random()).substring(0,12)
    };

    this.onClick = ::this.onClick;
    this.onChange = ::this.onChange;
  }

  onClick(e) {
    if (this.props.submitFileUrl) {
      document.getElementById(`megapdraft-file-hidden-input-${this.state.fileFieldId}`).click()
    } else {
      const src = window.prompt("Enter a URL");
      if (!src) { return };

      const data = { src: src, type: "image", display: "medium" };
      this.props.onChange(insertDataBlock(this.props.editorState, data));
    }
  }

  onChange(e) {
    e.preventDefault();
    const file = document.getElementById(`megapdraft-file-hidden-input-${this.state.fileFieldId}`).files[0]
    let src;

    if (file) {
      const fd = new FormData();
      fd.append('file', file);

      $.ajax({
        type: 'POST',
        url: this.props.submitFileUrl,
        contentType: false,
        processData: false,
        data: fd,
        async: false,
        success: function success(response) {
          src = response.body;
        }
      });

      const data = { src: src, type: "image", display: "medium" };
      this.props.onChange(insertDataBlock(this.props.editorState, data));
    }
  }

  render() {
    return (
      <button className={this.props.className} type="button" onClick={this.onClick} title={this.props.title} tabIndex="-1">
        { this.props.submitFileUrl &&
          <input type='file'
                 id={`megapdraft-file-hidden-input-${this.state.fileFieldId}`}
                 style={{'display':'none'}}
                 onChange={this.onChange} /> }
        <icons.ImageIcon className="sidemenu__button__icon" />
      </button>
    );
  }
}
