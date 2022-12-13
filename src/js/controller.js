import model from './model';
import view from './view';

class Controller {

    constructor() {
        this.init();
    }

    async controlMenu() {
        try {
            view.renderSpinner();
            await model.loadMenu();
            const menuCats = model.state.menuCategories;
            view.renderCatBar(menuCats);
            view.render(model.state);
        } catch(err) {
            view.renderError();
        }
    }

    init() {
        view.addHandlerMenu(this.controlMenu);
    }
}

export default new Controller();

// export const controlMenu = async function() {
//     try {
//         view.renderSpinner();
//         await model.loadMenu();
//         const menuCats = model.state.menuCategories;
//         view.renderCatBar(menuCats);
//         view.render(model.state);
//     } catch(err) {
//         view.renderError();
//     }
// }
//
// const init = function() {
//     view.addHandlerMenu(controlMenu);
// }
//
// init();
