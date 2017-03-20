import axios from 'axios';

const ROOT_URL = 'https://api.nasa.gov/mars-photos/api/v1/';
const manifest = 'manifests';
const KEY = 'q3SD3P3QY5c5yYSqH7cJE0MyUmOG0FxvQHsw2JbQ';

//manifests/${roverName}?api_key=DEMO_KEY`;

export const FETCH_MANIFEST = 'FETCH_MANIFEST';

export function fetchManifest(roverName) {
  const url = `${ROOT_URL}${manifest}/${roverName}?api_key=${KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_MANIFEST,
    payload: request
  };
}
