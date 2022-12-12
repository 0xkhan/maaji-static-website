import './sass/main.scss';
import './assets/eatinside_icon.svg';
import './assets/header_img.png';
import './assets/og-img.png';
import './assets/takeaway_icon.svg';
// import './assets/stories-video.mp4';
import * as control from './js/controller';

'use strict';

control.controlMenu();
const bodyElement = document.querySelector('body');
const pageId = bodyElement.getAttribute('data-page-id');

function menu(tab, container, content) {
    const tabs = document.querySelectorAll(`.${tab}`);
    const tabsContainer = document.querySelector(`.${container}`);
    const tabsContent = document.querySelectorAll(`.${content}`);

    tabsContainer.addEventListener('click', function(event) {
        const clicked = event.target.closest(`.${tab}`);

        // When empty space around buttons is clicked it returns Null - this takes care of it
        if (!clicked) return;

        // Add active class to the button that is clicked
        tabs.forEach((tab) => tab.classList.remove('menu__tab--active'));
        clicked.classList.add('menu__tab--active');

        // Activate content area
        tabsContent.forEach((tabContent) => tabContent.classList.remove('menu__content--active'));
        document.querySelector(`.menu__content--${clicked.dataset.tab}`).classList.add('menu__content--active');
    });
}

document.addEventListener('DOMContentLoaded', function(event) {
    switch(pageId) {
        case 'home':
            // menu('menu__tab', 'menu__tabs', 'menu__content');
            break;
        case 'menu':
            menu('menu-2__tab', 'menu-2__tabs', 'menu__content');
            break;
        default:
            // Do Nothing
    }
});

// Google maps
/*
function initMap() {
    const customMapStyles = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f0bf72"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ];
    // The location of Maaji 48.0103052, 7.811446
    const maaji = { lat: 48.0103052, lng: 7.811446 };
    // The map, centered at Maaji
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: maaji,
        styles: customMapStyles,
    });
    // The marker, positioned at Maaji
    const marker = new google.maps.Marker({
        position: maaji,
        map: map,
    });
}
*/