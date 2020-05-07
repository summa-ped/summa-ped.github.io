var
    words = ['elcome!'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 5,
    speed = 100;

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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var welcome = function () {
    const logo = document.querySelector('.logo');
    const word = document.querySelector('.word');
    logo.style.transform = 'translate(-400px) rotate(-60deg)';
    word.style.transform = 'translate(-400px)';

    sleep(1000).then(() => { wordflick(); });
}

$(document).ready(function () {
    document.querySelector('.logo').style.transform = 'scale(1.15)'
    sleep(1000).then(() => { welcome(); });
});