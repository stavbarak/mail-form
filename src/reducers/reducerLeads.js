    import _ from 'lodash';
    import { MAIL_SENT, REQUEST_SENT, SEND_MAIL_FAIL } from '../actions';

    export default function (state = {}, action) {
        switch (action.type){
            case REQUEST_SENT:
                console.log(action);
                return _.mapKeys(action.userDetails);
            case MAIL_SENT:
                console.log(action);
                return { };
            case SEND_MAIL_FAIL:
                console.log(action);
                return { };
            default:
                return state;
        }
    }


