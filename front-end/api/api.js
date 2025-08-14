import axios from "axios";

const URL = "https://projeto-spotify-back-end.onrender.com";

const responseArtists = await axios.get(`${URL}/artists`); 
const responseSongs = await axios.get(`${URL}/songs`); 

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
