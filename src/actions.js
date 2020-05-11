export function fetchPlaylist() {
    return dispatch => {
        fetch('/api/playlists');
    }
}