import React, { Component, PropTypes } from 'react';
import platform from 'platform';

const containerClassName = 'platform-render-container';

export default class PlatformRender extends Component {
  PropTypes = {
    platform: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className={containerClassName}>
        {this.props.platform === platform.name
          ? this.props.nest || this.props.children || ''
          : ''}
      </div>
    );
  }
}

export class Ie extends Component {
  render() {
    return <PlatformRender platform="IE" nest={this.props.children} />;
  }
}

export class Chrome extends Component {
  render() {
    return <PlatformRender platform="Chrome" nest={this.props.children} />;
  }
}

export class Safari extends Component {
  render() {
    return <PlatformRender platform="Safari" nest={this.props.children} />;
  }
}

export class Firefox extends Component {
  render() {
    return <PlatformRender platform="Firefox" nest={this.props.children} />;
  }
}

export class Opera extends Component {
  render() {
    return <PlatformRender platform="Opera" nest={this.props.children} />;
  }
}

export class Edge extends Component {
  render() {
    return (
      <PlatformRender platform="Microsoft Edge" nest={this.props.children} />
    );
  }
}
