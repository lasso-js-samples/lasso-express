var util = require('../../util');

window.addEventListener("load", function() {
    var targetEl = document.getElementById('target');
    targetEl.innerHTML = '2+2=' + util.add(2, 2);
});
