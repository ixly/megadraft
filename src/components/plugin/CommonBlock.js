/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, { Component } from "react";

import Dropdown from "../../components/Dropdown";
import {
  BlockActionGroup,
  BlockControls,
  BlockWrapper
} from "../../components/plugin";
import {
  defaultDisplayOptions,
  DEFAULT_DISPLAY_KEY
} from "../../components/plugin/defaults";

export default class CommonBlock extends Component {
  constructor(props) {
    super(props);

    this._handleDisplayChange = ::this._handleDisplayChange;
  }

  _handleDisplayChange(newValue) {
    this.props.container.updateData({ display: newValue });
  }

  render() {
    const data = this.props.data;
    const defaults = {
      defaultDisplay: DEFAULT_DISPLAY_KEY,
      displayOptions: defaultDisplayOptions(this.props.i18n)
    };
    let options = this.props.blockProps.plugin.options || {};
    options = { ...defaults, ...options };

    const readOnly = this.props.blockProps.getInitialReadOnly();
    const selectedDisplay = data.display || options.defaultDisplay;

    return (
      <BlockWrapper readOnly={readOnly} display={selectedDisplay}>
        {!readOnly && (
          <BlockControls>
            <Dropdown
              items={options.displayOptions}
              selected={selectedDisplay}
              onChange={this._handleDisplayChange}
            />

            <BlockActionGroup items={this.props.actions} />
          </BlockControls>
        )}

        {this.props.children}
      </BlockWrapper>
    );
  }
}
