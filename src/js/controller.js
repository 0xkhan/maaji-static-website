import * as model from './model.js';
import view from './view';

export const controlMenu = async function() {
    try {
        view.renderSpinner();
        await model.loadMenu();
        const menuCats = model.state.menuCategories;
        view.renderCatBar(menuCats);
        view.render(model.state);
    } catch(err) {
        console.error(err);
    }
}

const init = function() {
    view.addHandlerMenu(controlMenu);
}

init();
