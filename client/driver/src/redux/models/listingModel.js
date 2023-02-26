import { action, thunk } from 'easy-peasy';
import serverUrl from './sharedUrl';
import axios from 'axios';

const listingModel = {
    listings: [],

    getListings: thunk(async (actions, payload) => {
        const url = serverUrl + '/listings';
        const response = await axios.get(url);
        actions.setListings(response.data.listings);
    }),

    setListings: action((state, payload) => {
        state.listings = [...payload];
    })
}

export default listingModel;