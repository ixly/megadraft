/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component} from "react";

import {
  BlockContent,
  BlockData,
  BlockInput,
  CommonBlock
} from "../../components/plugin";

import icons from "../../icons";

import VideoBlockStyle from "./VideoBlockStyle";


export default class VideoBlock extends Component {
  constructor(props) {
    super(props);

    this._handleCaptionChange = ::this._handleCaptionChange;
    this.renderCaptionBlock = ::this.renderCaptionBlock;

    this.actions = [
      {"key": "delete", "icon": icons.DeleteIcon, "action": this.props.container.remove}
    ];
  }

  _handleCaptionChange(event) {
    this.props.container.updateData({caption: event.target.value});
  }

  renderCaptionBlock() {
    if (this.props.blockProps.editorReadOnly) {
      return (
        <p className="caption-readonly">{this.props.data.caption}</p>
      )
    } else {
      return (
        <BlockInput
          placeholder="Caption"
          value={this.props.data.caption}
          onChange={this._handleCaptionChange} />
      )
    }
  }

  render() {
    return (
      <CommonBlock {...this.props} actions={this.actions}>
        <BlockContent>
          <video controls style={VideoBlockStyle.video} src={this.props.data.src} alt=""/>
        </BlockContent>

        <BlockData>
          { this.renderCaptionBlock() }
        </BlockData>
      </CommonBlock>
    );
  }
}
