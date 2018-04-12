var cleanCss = require('clean-css');

module.exports = function(content) {
    this.cacheable && this.cacheable();
    var isCSS = this.resourcePath.indexOf(".css") != -1;
    var isTPL = this.resourcePath.indexOf(".tpl") != -1;
    content = isCSS ? new cleanCss().minify(content).styles : isTPL ? content.replace(/\r|\n|\t/g, '').replace(/\s+/g, ' ').replace(/>\s+</g, '><') : '';
    this.value = content;
    return "module.exports = " + JSON.stringify(content);
}
module.exports.seperable = true;
