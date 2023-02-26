import { action, thunk } from 'easy-peasy';
import serverUrl from './sharedUrl';
import axios from 'axios';

const pointsModel = {
    points: [],

    getPoints: thunk(async (actions, payload) => {
        const username = payload;
        const url = serverUrl + '/points?driver_id=' + username;
        const response = await axios.get(url).then((response) => {
            if (response.data.status === 'success') {
                return response.data.points;
            } else {
                alert('Driver ID does not exist');
            }
        }).catch((error) => {
            console.log(error);
        });

        actions.setPoints(response);
    }),

    setPoints: action((state, payload) => {
        if (payload !== null) {
            state.points = payload;
        }
    })
}

export default pointsModel;