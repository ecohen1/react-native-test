import {createStore} from 'redux';

const changeCurrCoords = (state = {lat:0,lng:0},action) => {
    switch(action.type){
        case 'UPDATE':
            let newCurrCoords = Object.assign({},state,action);
            delete newCurrCoords.type;
            return newCurrCoords;
        default:
            return state;
    }
}

export const storeCurrCoords = createStore(changeCurrCoords);