var utils = require('../../../lib/utils');

module.exports = {

    getData: function(readability, meta, __enable_readability) {

        return {
            safe_html: utils.encodeText(meta.charset, readability.getHTML())
        };
    },

    tests: [{
        page: "http://technorati.com/blogs/top100/",
        selector: ".latest"
    }]    
};