import axios from 'axios';

const ROOT_URL = 'https://api.nasa.gov/mars-photos/api/v1/';
const manifest = 'manifests';
//const KEY = 'q3SD3P3QY5c5yYSqH7cJE0MyUmOG0FxvQHsw2JbQ';

//manifests/${roverName}?api_key=DEMO_KEY`;

export const FETCH_MANIFEST = 'FETCH_MANIFEST';

export function fetchManifest(roverName) {
  const url = `${ROOT_URL}${manifest}/${roverName}?api_key=DEMO_KEY`;
  //'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&camera=navcam&api_key=DEMO_KEY'
  
  //const secondUrl = `${ROOT_URL}rovers/${roverName}/photos?sol=1000&page=1&camera=navcam&api_key=${KEY}`;
 
  const request = axios.get(url);
  //console.log('Request:', request);
  return {
    type: FETCH_MANIFEST,
    payload: request
  };
}
