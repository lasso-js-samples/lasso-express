var sumTemplate = require('./sum.marko');
require('./style.less');

window.addEventListener("load", function() {

    var targetEl = document.getElementById('target');

    var sumHtml = sumTemplate.renderSync({
        a: 2,
        b: 2
    });

    targetEl.innerHTML = sumHtml;
});
