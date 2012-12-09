exports.techMixin = {

    getCreateResult: function() {
        return '111';
    },

    storeCreateResult: function(path, suffix, res, force) {
        // always overwrite html files
        return this.__base(path, suffix, res, true);
    },

    getDependencies: function() {
        return ['md'];
    },

    getSuffixes: function() {
        return ['html'];
    }

}
