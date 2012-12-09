/*global MAKE:true */

"use strict";

var BEM = require('bem'),
    U = BEM.util;

//process.env.YENV = 'production';

MAKE.decl('Arch', {

    getBundlesLevels: function() {
        return [
            'posts'
        ];
    },

    getLibraries: function() {

        return {};

    }

});


MAKE.decl('BundleNode', {

    getTechs: function() {
        return [
            'md',
            'html'
        ];
    }

});

MAKE.decl('BundleLevelNode', {

    // см. https://github.com/bem/bem-tools/blob/master/lib/nodes/level.js
    scanLevelItems: function() {

        return _.uniq(
            _.sortBy(
                this.level.getItemsByIntrospection()
                    .filter(function(item) {

                        var type = U.bemType(item);  // U -> `BEM.util`

                        if (type === 'block' && item.block === this.mergedBundleName()) return false;

                        // NOTE: вместо bemjson.js и bemdecl.js указать свои технологии-источники !!!
                        return ~['block', 'elem'].indexOf(type) && ~['md'].indexOf(item.tech);

                    }, this),
                U.bemKey),
            true,
            U.bemKey);

    }

});
