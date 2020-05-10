import React from 'react';

function AlbumsList({ albums }) {
    const emptyMessage = (
        <p>Aint nothing here.</p>
    );

    const albumsList = (
        <p>Album List</p>
    );

    return (
        <div>
            {albums.length === 0 ? emptyMessage : albumsList}
        </div>
    );
}

// AlbumsList.propTypes = { 
//     albums: React.PropTypes.array.isRequired
// }

export {AlbumsList};