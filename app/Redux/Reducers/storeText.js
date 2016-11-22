import {createStore} from 'redux';

const changeText = (state = {nameText:'Eli',latText:'lat',longText:'long'},action) => {
    nameText = state.nameText;
    latText = state.latText;
    longText = state.longText;
    switch(action.type){
        case 'NAME':
            nameText = action.text;
            break;
        case 'LAT':
            latText = action.text;
            break;
        case 'LONG':
            longText = action.text;
            break;
        default:
            break;
    }
    return {
        nameText: nameText,
        latText: latText,
        longText: longText
    }
}

export const storeText = createStore(changeText);