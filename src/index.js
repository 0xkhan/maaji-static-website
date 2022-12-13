import './sass/main.scss';
import './assets/eatinside_icon.svg';
import './assets/header_img.png';
import './assets/og-img.png';
import './assets/takeaway_icon.svg';
// import './assets/stories-video.mp4';
import controller from './js/controller';

'use strict';

// Google maps

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

window.initMap = initMap;
