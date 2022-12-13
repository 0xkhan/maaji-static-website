import { API_URL } from './config.js';
import { AJAX } from './helpers.js';

class Model {
    state = {
        menuCategories: ["vorspeisen", "tagesangebote", "maaji"],
        menu: {}
    };

    async loadMenu() {
        try {
            const data = await AJAX(API_URL);
            this.state.menu = data;
        } catch(err) {
            throw err;
        }
    }
}

export default new Model();

// export const state = {
//     menuCategories: ["vorspeisen", "maaji"],
//     menu: {}
// };
//
// export const loadMenu = async function() {
//     try {
//         const data = await AJAX(API_URL);
//         state.menu = data;
//     } catch(err) {
//         throw err;
//     }
// }
