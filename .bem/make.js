/*global MAKE:true */

"use strict";

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
