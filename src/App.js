import React, {useState} from 'react';
import { PlaylistEditor } from './PlaylistEditor';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Playlist } from './PlaylistList';
import { fetchPlaylist } from './actions';


const arrPlaylists = [{name: "test1", songs: "this,that,it"}, {name: "test2", songs: "this,that,it"}];

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Playlists</Link> 
        -
        <Link to="/PlaylistEditor">Editor</Link>
  
        <Switch>
          <Route path="/PlaylistEditor" component={PlaylistEditor}/>
          <Route path="/">
            <Playlists />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




function Playlists() {
  const [playlists, setPlaylists] = useState(arrPlaylists);

  fetchPlaylist();


  const populatePage = pl => {
    setPlaylists(playlists.push(arrPlaylists));
  }

  const api_url = '/api/playlists';
  async function fetchstuff() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
  }
  

  return(
    
    <div id="root" >
      <h1>Playlists:</h1>


      <div id="playlist-home-container">
        {playlists.map(plInfo => <Playlist key={plInfo.title} plInfo={plInfo} add={populatePage}/>)}
      </div>
      
      <button onClick={fetchstuff}>API</button>

    </div>
  );
}

App.propTypes = {
  playlists: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    playlists: state.playlists
  }
}

export default connect(mapStateToProps)(App);
