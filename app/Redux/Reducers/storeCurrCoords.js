import {createStore} from 'redux';

const changeCurrCoords = (state = {lat:0,lng:0},action) => {
    var lat = state.lat;
    var lng = state.lng;
    switch(action.type){
        case 'UPDATE':
            lat = action.lat;
            lng = action.lng;
            break;
        default:
            break;
    }
    var newCurrCoords = {
        lat:lat,
        lng:lng
    };
    return newCurrCoords;
}

export const storeCurrCoords = createStore(changeCurrCoords);