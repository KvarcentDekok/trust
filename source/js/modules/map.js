export function catalogMap() {
    const showMapButton = document.querySelector('#show-map');
    const url = new URL(location.href);
    const data = {
        "type": "FeatureCollection",
        "features": []
    }

    /*const data = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "id": 0,
                "geometry": {"type": "Point", "coordinates": [51.741461, 39.316053]},
                "properties": {
                    "balloonContentHeader": "<a target='_blank' href='object.html'>2—комнатная квартира, 72 м2,  9/9 этаж</a>",
                    "balloonContentBody": "13 750 000 ₽",
                    "balloonContentFooter": "р-н Железнодорожный, мкр. Боровое, ул. Сельская, 2М",
                    "clusterCaption": "2—комнатная квартира, 72 м2,  9/9 этаж",
                    "hintContent": "2—комнатная квартира, 72 м2,  9/9 этаж"
                }
            },
            {
                "type": "Feature",
                "id": 1,
                "geometry": {"type": "Point", "coordinates": [51.698063, 39.185687]},
                "properties": {
                    "balloonContentHeader": "<a target='_blank' href='object.html'>2—комнатная квартира, 72 м2,  9/9 этаж</a>",
                    "balloonContentBody": "13 750 000 ₽",
                    "balloonContentFooter": "Беговая улица, 59",
                    "clusterCaption": "2—комнатная квартира, 72 м2,  9/9 этаж",
                    "hintContent": "2—комнатная квартира, 72 м2,  9/9 этаж"
                }
            },
            {
                "type": "Feature",
                "id": 2,
                "geometry": {"type": "Point", "coordinates": [51.666730, 39.215532]},
                "properties": {
                    "balloonContentHeader": "<a target='_blank' href='object.html'>2—комнатная квартира, 72 м2,  9/9 этаж</a>",
                    "balloonContentBody": "13 750 000 ₽",
                    "balloonContentFooter": "Скорняжный переулок, 5",
                    "clusterCaption": "2—комнатная квартира, 72 м2,  9/9 этаж",
                    "hintContent": "2—комнатная квартира, 72 м2,  9/9 этаж"
                }
            }
        ]
    }*/

    async function showMapClickHandler() {
        if (!data.features.length) {
            const response = await fetch(url);

            if (response.ok) {
                const json = await response.json();

                data.features = json.map((dataObject) => {
                    return {
                        "type": "Feature",
                        "id": dataObject.id,
                        "geometry": {"type": "Point", "coordinates": dataObject.coordinates},
                        "properties": {
                            "balloonContentHeader": `<a target='_blank' href='${dataObject.link}'>${dataObject.name}</a>`,
                            "balloonContentBody": `${dataObject.price} ₽`,
                            "balloonContentFooter": dataObject.address,
                            "clusterCaption": dataObject.name,
                            "hintContent": dataObject.name
                        }
                    }
                })
            } else {
                alert("Ошибка HTTP: " + response.status);
            }

            ymaps.ready(init);
        }

        /*ymaps.ready(init);*/
    }

    function init() {
        const map = new ymaps.Map('catalog-map', {
            center: [51.67, 39.21],
            zoom: 11
        });

        const objectManager = new ymaps.ObjectManager({
            clusterize: true,
            gridSize: 32,
            clusterDisableClickZoom: true
        });

        if (data.features.length) {
            objectManager.objects.options.set('preset', 'islands#greenDotIcon');
            objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
            map.geoObjects.add(objectManager);
            objectManager.add(data);
        }
    }

    url.searchParams.append('map', '1');

    showMapButton.addEventListener('click', () => {
        showMapClickHandler();
    });
}