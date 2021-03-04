/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, { Component } from "react";

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
    this.renderVideo = ::this.renderVideo;

    this.actions = [
      {
        key: "delete",
        icon: icons.DeleteIcon,
        action: this.props.container.remove
      }
    ];
  }

  _handleCaptionChange(event) {
    this.props.container.updateData({ caption: event.target.value });
  }

  renderVideo() {
    const youtubeRegexp = /(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^?&"'>]+)/;
    const vimeoRegexp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
    const url = this.props.data.src;

    if (url.match(youtubeRegexp)) {
      const identifier = url.match(youtubeRegexp)[5];

      return (
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            src={
              "https://www.youtube-nocookie.com/embed/" +
              identifier +
              "?rel=0&showinfo=0"
            }
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          ></iframe>
        </div>
      );
    } else if (url.match(vimeoRegexp)) {
      const identifier = url.match(vimeoRegexp)[3];

      return (
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            src={
              "https://player.vimeo.com/video/" +
              identifier +
              "?title=0&byline=0&portrait=0"
            }
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          ></iframe>
        </div>
      );
    } else {
      return (
        <video
          controls
          style={VideoBlockStyle.video}
          src={url}
          alt={this.props.data.caption}
        />
      );
    }
  }

  render() {
    return (
      <CommonBlock {...this.props} actions={this.actions}>
        <BlockContent>{this.renderVideo()}</BlockContent>

        <BlockData>
          <BlockInput
            placeholder="Caption"
            value={this.props.data.caption}
            onChange={this._handleCaptionChange}
            readOnly={this.props.blockProps.getInitialReadOnly()}
          />
        </BlockData>
      </CommonBlock>
    );
  }
}
