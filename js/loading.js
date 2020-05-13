$(document).ready(function () {
    const times = 5;

    var p11 = document.getElementById('p11');
    var p12 = document.getElementById('p12');
    var p13 = document.getElementById('p13');
    var p14 = document.getElementById('p14');
    var p21 = document.getElementById('p21');
    var p22 = document.getElementById('p22');
    var p23 = document.getElementById('p23');
    var p24 = document.getElementById('p24');
    var p31 = document.getElementById('p31');
    var p32 = document.getElementById('p32');
    var p33 = document.getElementById('p33');
    var p34 = document.getElementById('p34');
    var p41 = document.getElementById('p41');
    var p42 = document.getElementById('p42');
    var p43 = document.getElementById('p43');
    var p44 = document.getElementById('p44');

    var p1 = [];
    p1.push(p11);
    p1.push(p12);
    p1.push(p13);
    p1.push(p14);
    var p2 = [];
    p2.push(p21);
    p2.push(p22);
    p2.push(p23);
    p2.push(p24);
    var p3 = [];
    p3.push(p31);
    p3.push(p32);
    p3.push(p33);
    p3.push(p34);
    var p4 = [];
    p4.push(p41);
    p4.push(p42);
    p4.push(p43);
    p4.push(p44);

    var pi = [];
    pi.push(p1);
    pi.push(p2);
    pi.push(p3);
    pi.push(p4);

    var matrix =
        [[[-8, -8], [-3, -8], [3, -8], [8, -8]],
        [[-8, -3], [-4, -2], [4, -2], [8, -3]],
        [[-8, 3], [-4, 2], [4, 2], [8, 3]],
        [[-8, 8], [-3, 8], [3, 8], [8, 8]]];

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            pi[i][j].style.transform = 'translate(' + matrix[i][j][0] * times + '%, ' + matrix[i][j][1] * times + '%)';
            console.log(matrix[i][j]);
        }
    }

    var closeLogo = setInterval(function () {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                pi[i][j].style.transform = 'none';
                console.log(matrix[i][j]);
            }
        }
    }, 2000);

    setTimeout(function () {
        var openLogo = setInterval(function () {
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    pi[i][j].style.transform = 'translate(' + matrix[i][j][0] * times + '%, ' + matrix[i][j][1] * times + '%)';
                    console.log(matrix[i][j]);
                }
            }
        }, 2000);
    }, 1000);
});