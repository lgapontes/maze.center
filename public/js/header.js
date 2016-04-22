//in somefile.js, please note that you should namespace your modules
var Header = {
    //default config
    config: {
        el: '#header',
    },
    
    init: function (config) {
        var cfg = this.config = $.extend({}, this.config, config);
        
        $(cfg.el).html('<div class="header"><img id="bigJonny" src="img/logo.png" class="logo" /></div>');
    }
};

$(function () {
    Object.create(Header).init({});
});