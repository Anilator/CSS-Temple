import React from 'react';
import Preview from './PreviewPresent';

const getPath = string =>
  `/static/media/${string.replace(/[ !@#$%^&*()_+=]+/g, '-').toLowerCase()}.jpg`;

export default class PreviewContainer extends React.Component {
  render() {
    return (
      <Preview {...this.props} imgSrc={getPath(this.props.name)} />
    );
  }
}
