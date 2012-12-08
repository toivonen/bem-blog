/*global MAKE:true */

"use strict";

//process.env.YENV = 'production';

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks/,

    bundlesLevelsRegexp: /^.+?\.bundles$/,

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
