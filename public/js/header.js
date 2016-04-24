//in somefile.js, please note that you should namespace your modules
var Header = {
    //default config
    config: {
        el: '#header',
    },
    
    init: function (config) {
        var cfg = this.config = $.extend({}, this.config, config);
        
        $(cfg.el).html('<div class="header"><a href="http://maze.center" style="display: block; width: 700px; height: 70px; background-image: url(img/image.png); background-repeat: no-repeat; background-position: 0px -200px;"></a></div>');
    }
};

$(function () {
    Object.create(Header).init({});
});