import { action, thunk } from 'easy-peasy';
import serverUrl from './sharedUrl';
import axios from 'axios';

const listingModel = {
    listings: [],

    getListings: thunk(async (actions, payload) => {
        const url = serverUrl + '/rewards';
        const response = await axios.get(url);
        console.log(response.data);
        actions.setListings(response.data.catalogue);
    }),

    setListings: action((state, payload) => {
        console.log(payload)
        state.listings = [...payload];
    })
}

export default listingModel;