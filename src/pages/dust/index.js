var template = require('view-engine')
    .load(require.resolve('./template.dust'));

module.exports = function(req, res) {
    template.render({
            name: 'Frank'
        },
        res);
};
