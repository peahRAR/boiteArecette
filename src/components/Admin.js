import React, { Component } from 'react';
import AddRecette from './AddRecette';

export default class Admin extends Component {
  render() {
    const {addRecette } = this.props;
    return (
    <div>
      <AddRecette addRecette={addRecette}  />
    </div>
    )
  }
}
