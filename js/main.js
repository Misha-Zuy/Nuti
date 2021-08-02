// SHOW HELP
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


// ___________________________________________________________________________

// ANIMATION
jQuery(document).ready(function ($) {
    AOS.init({
        duration: 1000,
        once: true,
        anchorPlacement: 'top-center'
    });
});
// Arrow-General
const btnContact = document.getElementById('btnContact');

btnContact.addEventListener('click', function () {
})

let updates = 0;
let progressLogEl = 0;
let updateLogEl = 0;
let loopBegan = 0;
let beginLogEl = 0;
let loopCompleted = 0;
let completeLogEl = 0;

anime({
    targets: '#iconArrowMain',
    translateY: 20,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutCirc',
    loopBegin: function (anim) {
        loopBegan++;
        beginLogEl.value = 'loop began : ' + loopBegan;
    },
    loopComplete: function (anim) {
        loopCompleted++;
        completeLogEl.value = 'loop completed : ' + loopCompleted;
    }

});

// NOUISLIDER
jQuery(document).ready(function ($) {
    const sliderPrice = document.getElementById('sliderPrice');

    if (sliderPrice) {
        noUiSlider.create(sliderPrice, {
            start: [3, 40],
            connect: true,
            step: 1,
            range: {
                'min': [3],
                'max': [40]
            }
        });

        const input0 = document.getElementById('inputPrice0');
        const input1 = document.getElementById('inputPrice1');
        const inputs = [input0, input1];

        sliderPrice.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = Math.round(values[handle]);
        });

        const setSlider = (i, value) => {
            let arr = [null, null];
            arr[i] = value;
            console.log(arr);
            sliderPrice.noUiSlider.set(arr);
        };

        inputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                console.log(index);
                setSlider(index, e.currentTarget.value);
            });
        });
    }
});
// ---Price, $
jQuery(document).ready(function ($) {
    let faChevronRightPrice = document.querySelector('#faChevronRightPrice');
    let filterDropPrice = document.querySelector('#filterDropPrice');
    let buttonColapsePrice = document.querySelector('#buttonColapsePrice');

    filterDropPrice.onclick = function () {
        if (buttonColapsePrice.classList.contains('collapsed')) {
            faChevronRightPrice.classList.remove("arrow__flip")
        } else {
            faChevronRightPrice.classList.add("arrow__flip")
        }
    }

    // --- PriceMod, $
    let faChevronRightPriceMod = document.querySelector("#faChevronRightPriceMod");
    let filterDropPriceMod = document.querySelector("#filterDropPriceMod");
    let buttonColapsePriceMod = document.querySelector("#buttonColapsePriceMod");

    filterDropPriceMod.onclick = function () {
        if (buttonColapsePriceMod.classList.contains("collapsed")) {
            faChevronRightPriceMod.classList.remove("arrow__flip")
        } else {
            faChevronRightPriceMod.classList.add("arrow__flip")
        }
    }

    // COLAPSE--LIST
    // ---NUTS type
    let faChevronRightType = document.querySelector("#faChevronRightType");
    let filterDropType = document.querySelector("#filterDropType");
    let buttonColapseType = document.querySelector("#buttonColapseType");

    filterDropType.onclick = function () {
        if (buttonColapseType.classList.contains("collapsed")) {
            faChevronRightType.classList.remove("arrow__flip")
        } else {
            faChevronRightType.classList.add("arrow__flip")
        }
    }

    // --- TypeMod

    let faChevronRightTypeMod = document.querySelector("#faChevronRightTypeMod");
    let filterDropTypeMod = document.querySelector("#filterDropTypeMod");
    let buttonColapseTypeMod = document.querySelector("#buttonColapseTypeMod");

    filterDropTypeMod.onclick = function () {
        if (buttonColapseTypeMod.classList.contains("collapsed")) {
            faChevronRightTypeMod.classList.remove("arrow__flip")
        } else {
            faChevronRightTypeMod.classList.add("arrow__flip")
        }
    }
});
// MAP
function initMap() {
    // The location of Uluru
    const uluru = { lat: 33.9412871, lng: -118.1345445 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 20,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}


// ELEMEN CHOOSE
let div1 = document.querySelector('#whyusDignity1');
let elipse1 = document.querySelector('#whyusBigelipse1');
let div2 = document.querySelector('#whyusDignity2');
let elipse2 = document.querySelector('#whyusBigelipse2');
let div3 = document.querySelector('#whyusDignity3');
let elipse3 = document.querySelector('#whyusBigelipse3');

jQuery(document).ready(function ($) {
    div1.onmouseover = function (e) {
        elipse1.style.background = '#30BE58';
    };

    div1.onmouseout = function (e) {
        elipse1.style.background = '';
    };
    div2.onmouseover = function (e) {
        elipse2.style.background = '#30BE58';
    };

    div2.onmouseout = function (e) {
        elipse2.style.background = '';
    };
    div3.onmouseover = function (e) {
        elipse3.style.background = '#30BE58';
    };

    div3.onmouseout = function (e) {
        elipse3.style.background = '';
    };
});
