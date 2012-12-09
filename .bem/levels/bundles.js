var PATH = require('path'),

    pjoin = PATH.join,
    presolve = PATH.resolve.bind(null, __dirname),

    PRJ_ROOT = presolve('../../'),

    PRJ_TECHS = presolve('../techs/');


exports.getTechs = function() {

    return {
        'md': '',
        'html': pjoin(PRJ_ROOT, '.bem/techs/md2html.js')
    };

};


// Create bundles in bemjson.js tech
exports.defaultTechs = ['md'];

