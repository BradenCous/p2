import React, {useState} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router} from 'react-router-dom'
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { AlbumsPage } from './AlbumsPage';
import './App.css';
import {PlaylistItem} from './playlistitem.js'

const bankSongs = [
  {title: "Blu", artist: "Jon Bellion", album: "Glory Sound Prep"},
  {title: "Stupid Deep", artist: "Jon Bellion", album: "Glory Sound Prep"},
  {title: "Conversations with my Wife", artist: "Jon Bellion", album: "Glory Sound Prep"},
];

const playlistSongs =[];
//<PlaylistItem songInfo={{title: "Stupid Deep", artist: "Jon Bellion", album: "Glory Sound Prep"}}/>




function App() {
  const [bank, setSongs] = useState(bankSongs);
  const [playlist, setPlaylist] = useState(playlistSongs)

  const addToPL = song => {
    if (bank.includes(song)) {
      setSongs(bank.filter(songInfo => songInfo.title !== song.title));
      playlist.push({title: song.title, artist: song.artist, album: song.album});
    } else {
      setPlaylist(playlist.filter(songInfo => songInfo.title !== song.title));
      bank.push({title: song.title, artist: song.artist, album: song.album});
    }
  }


  return (
    <div id="root" >

      

      <div classname="part" id="playlist-bank">
        {playlist.map(songInfo => <PlaylistItem key={songInfo.title} songInfo={songInfo} add={addToPL}/>)}
      </div>

      <div id="search-bar">
        <label>Search for songs by:</label>
        <input type="text" placeholder="Song" id="song-search"></input>
        <input type="text" placeholder="Artist" id="artist-search"></input>
        <input type="text" placeholder="Album" id="album-search"></input>
        <button>Search</button>

      </div>

      <div classname="part" id="song-bank">
        {bank.map(songInfo => <PlaylistItem key={songInfo.title} songInfo={songInfo} add={addToPL}/>)}
      </div>

      test

      <Router><Link to="/albums">Album</Link></Router>

      <Route path="/albums" component={AlbumsPage}/>
      
      
    </ div>



    
  );
}


export default App;
