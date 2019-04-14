import { combineReducers } from 'redux';


const INITIAL_STATE = {
    col1Open: false,
    col2Open: false,
    col3Open: false
}

const navbarTogglerReducer = (navOpen = false, action) => {
    switch(action.type) {
        case 'TOGGLE_NAV' :
            return !action.payload;
        default :
            return navOpen;

    }
}

const collapseTogglerReducer = (colsOpen = INITIAL_STATE, action) => {
     switch(action.type) {
        case 'TOGGLE_COLLAPSE' :
            switch(action.colId) {
                case 1 :
                    return {...colsOpen, col1Open: !action.payload};
                case 2 :
                    return {...colsOpen, col2Open: !action.payload};
                case 3 :
                    return {...colsOpen, col3Open: !action.payload};
            }
        default :
            return colsOpen;
     }
}

export default combineReducers({
    navOpen: navbarTogglerReducer,
    colsOpen: collapseTogglerReducer
}) 