/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import api from 'service/api';

export async function AreasService() {
    let result;
    try {
        result = await api.get('areas'); 
        return result;

    } catch (e) {
        console.error(e);
    }
    return;
}