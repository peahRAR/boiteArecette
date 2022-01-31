import React, { Component } from 'react';
import AddRecette from './AddRecette';

export default class Admin extends Component {
  render() {
    return (
    <div>
      <AddRecette addRecette={this.props.addRecette}  />
    </div>
    )
  }
}
