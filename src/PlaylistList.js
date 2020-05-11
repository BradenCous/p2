import React from 'react';



// let PlaylistList = ({playlists}) => {
    
//     const emptyMessage = (
//         <p>Aint nothing here.</p>
//     );

//     const listOfPlaylists = (
//         <p>Album List</p>
//     );

//     return (
//         <div>
//             {playlists.length === 0 ? emptyMessage : listOfPlaylists}
//         </div>
//     );
// }

// PlaylistList.propTypes = { 
//     playlists: PropTypes.array.isRequired
// }


// export {PlaylistList};

export function Playlist(props) {
    const plInfo = props.plInfo;
    return(
        <div classname="Playlist">
            <span classname="name" id="name">{plInfo.name}</span>
            <span classname="songs" id="songs">{plInfo.songs}</span>
        </div>
    );
}