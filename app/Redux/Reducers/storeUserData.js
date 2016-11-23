import {createStore} from 'redux';

const changeUserData = (state = {name:'Eli'},action) => {
    var name = state.name;
    switch(action.type){
        case 'UPDATE':
            name = action.name;
            break;
        default:
            break;
    }
    var newUserData = {
        name:name
    };
    return newUserData;
}

export const storeUserData = createStore(changeUserData);