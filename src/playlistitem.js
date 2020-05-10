import React from 'react';

export function PlaylistItem(props) {
    const songInfo = props.songInfo;
    return(
        <div className="PlaylistItem">
            <span><button classname="btn" onClick={() => props.add(songInfo)}>+/-</button></span>
            
            <span classname="title" id="title">{songInfo.title}</span>
            <span classname="artist" id="artist">{songInfo.artist}</span>
            <span classname="album" id="album">{songInfo.album}</span>

        </div>
    );
}

//<span classname="add"><button onClick={() => props.remove(songInfo.title)}>+</button></span>
//<span classname="rem"><button onClick={() => props.remove(songInfo)}>-</button></span>