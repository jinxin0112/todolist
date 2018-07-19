import action from '../actions';
import list from '../list';

const initialState = { list };

function reducer( state=initialState, action ){
    switch(action.type){
        case '' :  
            return '';
        default:
            return state
    }
}

export default reducer