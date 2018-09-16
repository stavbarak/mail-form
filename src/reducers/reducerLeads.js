    import _ from 'lodash';
    import { MAIL_SENT, REQUEST_SENT, SEND_MAIL_FAIL } from '../actions';

    export default function (state = {}, action) {
        switch (action.type){
            case REQUEST_SENT:
                console.log(action);
                return _.mapKeys(action.userDetails);
            case MAIL_SENT:
                console.log('action');
                return { ...state, msg: 'Mail sent succeessfully!', type: 'info' };
            case SEND_MAIL_FAIL:
                console.log(action);
                return { ...state, msg: 'Sending failed. Try again', type: 'danger' };
            default:
                return state;
        }
    }


