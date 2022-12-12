import { API_URL } from './config.js';
import { AJAX } from './helpers.js';

export const state = {
    menuCategories: ["vorspeisen", "maaji"],
    menu: {}
};

const createDishObject = function(data) {
    const dish = data;
    return {
        dishName: dish.dish_name,
        dishNo: dish.dish_no,
        dishPrice: dish.dish_price,
        dishIngredients: dish.dish_ingredients,
        dishExtras: dish.dish_extras
    }
}

export const loadMenu = async function() {
    try {
        const data = await AJAX(API_URL);

        // data.vorspeisen.forEach(dish => {
        //     let newDish = createDishObject(dish);
        //     state.menu.vorspeisen.push(newDish);
        // });

        state.menu = data;

    } catch(err) {
        throw err;
    }
}
