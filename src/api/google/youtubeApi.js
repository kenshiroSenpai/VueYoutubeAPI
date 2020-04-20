require('dotenv').config();

const {google} = require('googleapis');

const youtube = google.youtube({
    version: 'v3',
    auth: process.env.API_KEY_YOUTUBE
});
function getSearch(name) {
    youtube.search.list(name);
}

export {getSearch}
