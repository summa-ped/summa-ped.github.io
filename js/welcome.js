var
    words = ['elcome!'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 5,
    speed = 150;

var wordflick = function () {
    setInterval(function () {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        }
        else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            }
            else {
                //offset--;
            }
        }
        $('.word').text(part);
    }, speed);
};

var wordback = function () {
    setInterval(function () {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        }
        else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
            offset--;
        }
        if (part.length > 1) {
            $('.word').text(part);
        } else {
            $('.word').text('');
        }
    }, speed);
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var showWelcome = function () {
    const logo = document.querySelector('.logo');
    const word = document.querySelector('.word');
    logo.style.transform = 'translate(-400px) rotate(-60deg)';
    word.style.transform = 'translate(-400px)';

    sleep(1000).then(() => { wordflick(); });
    sleep(2000).then(() => { grow('.full-welcome'); });
}

var showBrand = function () {
    const logo = document.querySelector('.logo');
    const word = document.querySelector('.word');
    const brand = document.querySelector('.brand');
    const brandbox = document.querySelector('.brand-box');

    wordback();
    
    sleep(1000).then(() => { logo.style.transform = 'none'; });
    sleep(1500).then(() => { word.style.transform = 'none'; });

    sleep(2500).then(() => { logo.style = 'display: none'; });
    sleep(2500).then(() => { brand.style = 'display: block'; });
    sleep(2500).then(() => { brandbox.style.transform = 'translate(0px, -25%)'; });
    sleep(2500).then(() => { word.style = 'display: none'; });
}

var grow = function (classe) {
    const el = document.querySelector(classe);

    el.style.transform = 'scale(1.15)';
    sleep(1500).then(() => { el.style.transform = 'scale(1)'; });
}

$(document).ready(function () {
    //document.querySelector('.logo').style.transform = 'scale(1.15)'
    sleep(1000).then(() => { showWelcome(); });
    sleep(5000).then(() => { showBrand(); });
});