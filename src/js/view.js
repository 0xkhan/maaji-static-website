class View {

    #data;
    #errorMessage = "Bad Request. Please try again!";

    #bodyElement = document.querySelector('body');
    #pageId = this.#bodyElement.getAttribute('data-page-id');
    #menuCatElem = document.querySelector('.menu__tabs');
    #menuItemsElem = document.querySelector('.menu__content-container');

    render(data) {
        if (!data) return this.renderError();
        this.#data = data;

        const markup = this.#data.menuCategories.map(cat => this.#generateMarkup(this.#data.menu[cat], cat)).join('');

        this.#clear(this.#menuItemsElem);
        this.#menuItemsElem.insertAdjacentHTML('afterbegin', markup);
    }

    renderCatBar(data) {
        if (!data) return this.renderError();
        this.#data = data;

        const markup = this.#data.map(this.#generateCatBarMarkup).join('');

        this.#clear(this.#menuCatElem);
        this.#menuCatElem.insertAdjacentHTML('afterbegin', markup);
    }

    renderSpinner() {
        const markup = `
            <div class="spinner">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                   <line x1="12" y1="6" x2="12" y2="3"></line>
                   <line x1="16.25" y1="7.75" x2="18.4" y2="5.6"></line>
                   <line x1="18" y1="12" x2="21" y2="12"></line>
                   <line x1="16.25" y1="16.25" x2="18.4" y2="18.4"></line>
                   <line x1="12" y1="18" x2="12" y2="21"></line>
                   <line x1="7.75" y1="16.25" x2="5.6" y2="18.4"></line>
                   <line x1="6" y1="12" x2="3" y2="12"></line>
                   <line x1="7.75" y1="7.75" x2="5.6" y2="5.6"></line>
                </svg>
            </div>
        `;

        this.#clear(this.#menuCatElem);
        this.#menuCatElem.insertAdjacentHTML('afterbegin', markup);
    }

    renderError() {
        const markup = `
            <div class="error">
                ${this.#errorMessage}
            </div>
        `;
    }

    #clear(elem) {
        elem.innerHTML = '';
    }

    #generateCatBarMarkup(cat) {
        return `
            <button class="btn btn--round menu__tab ${cat === 'vorspeisen' ? 'menu__tab--active' : ''} menu__tab--${cat}" data-tab="${cat}">${cat}</button>
        `;
    }

    #generateMarkup(data, cat) {
        return `
            <div class="menu__content ${cat === 'vorspeisen' ? 'menu__content--active' : ''} menu__content--${cat}">
                <div class="row">
                    ${data.map(this.#generateDishMarkup).join('')}
                </div>
            </div>
        `;
    }

    #generateDishMarkup(dish) {
        return `
            <div class="col-6 col-md-12">
                <div class="menu-2__item">
                    <div class="menu-2__item-desc">
                        <span class="menu-2__item-price u-margin-bottom-xs">${dish.dishPrice}€</span>
                        <h3 class="u-margin-bottom-xs">${dish.dishName}</h3>
                        <p class="menu-2__item-ingredients">
                            ${dish.dishIngredients.map(ing => ing).join(', ')}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }


    async addHandlerMenu(handler) {
        function menu(tab, container, content) {
            handler().then(() => {
                const tabs = document.querySelectorAll(`.${tab}`);
                const tabsContainer = document.querySelector(`.${container}`);
                const tabsContent = document.querySelectorAll(`.${content}`);

                tabsContainer.addEventListener('click', function(e) {
                    const clicked = e.target.closest(`.${tab}`);
                    if (!clicked) return;

                    // Add active class to the button that is clicked
                    // tabs.forEach((tab) => tab.classList.remove('menu__tab--active'));
                    tabs.forEach((tab) => {
                        tab.classList.remove('menu__tab--active');
                    });
                    clicked.classList.add('menu__tab--active');
                    console.log(tabs);

                    // Activate content area
                    tabsContent.forEach((tabContent) => tabContent.classList.remove('menu__content--active'));
                    document.querySelector(`.menu__content--${clicked.dataset.tab}`).classList.add('menu__content--active');
                });
            });
        }

        window.addEventListener('load', () => {
            switch(this.#pageId) {
                case 'home':
                    menu('menu__tab', 'menu__tabs', 'menu__content');
                    break;
                case 'menu':
                    menu('menu-2__tab', 'menu-2__tabs', 'menu__content');
                    break;
                default:
                    // Do Nothing
            }
        });
    }

}

export default new View();
