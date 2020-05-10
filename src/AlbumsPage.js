import React from 'react';
import { AlbumsList } from './AlbumsList';
import { connect } from 'react-redux';

function AlbumsPage() {
  return (
    <div>
        <h1>Hey this is the albums page</h1>

        {/* <AlbumsList albums={this.props.albums} /> */}
    </div>

    
  );
}

// AlbumsPage.propTypes = {
//     albums: React.PropTypes.array.isRequired
// }

function mapStateToProps(state) {
    return {
        albums: state.albums
    }
};



export {AlbumsPage};