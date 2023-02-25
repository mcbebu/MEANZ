import { createStore, persist } from 'easy-peasy';
import pointsModel from './models/pointsModel';
//import listingModel from './models/listingModel';

const storeModel = {
    points: pointsModel
    //listings: listingModel,
};

const store = createStore(persist(storeModel, {mergeStrategy: 'mergeShallow'}));

export default store;