

function onClick(number, ring) {
    console.log(`clicked on ${number} ${ring}`);
}




function generatePolygon1() {
    var wrapper = document.getElementById('polygon-wrapper-1');

    var innerHtml = '';
    for (let i = 0; i < 20; i++) {
        innerHtml += `
            <div class="${i % 2 ? 'brown-bgnd' : 'dark-grey-bgnd'} div-size500 shape-dreieck1" style="transform: rotate(${18 * i}deg);" onclick="onClick(${i}, 0)"></div>\n
        `;     
    }

    wrapper.innerHTML = innerHtml;
}


function init() {
    generatePolygon1();
}
