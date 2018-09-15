import axios from 'axios';
    
const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
  });

function sendRequested(userDetails) {
    return {
        type: REQUEST_SENT,
        userDetails
    };
}

function mailSent() {
    return {
        type: MAIL_SENT
    };
}

function sendMailFail(error) {
    return {
        type: SEND_MAIL_FAIL,
        error
    };
}

export const REQUEST_SENT = 'REQUEST_SENT';
export const MAIL_SENT = 'MAIL_SENT';
export const SEND_MAIL_FAIL = 'SEND_MAIL_FAIL';


export function sendMail({mail, userDetails}) {
    
    return function (dispatch) {
        dispatch(sendRequested(userDetails));
        console.log(mail);
        return instance.post('/', mail).then(
        response =>  dispatch(mailSent()),
        error =>  {
            console.error(error);
            dispatch(sendMailFail());
        }
    );
};
}
