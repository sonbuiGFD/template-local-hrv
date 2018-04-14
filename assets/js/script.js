var $ = window.jQuery;
var RS = {
  init: function() {
    var that = this;
  },
  initViews: function() {
    var view = window.shop.template,
      that = this;
    switch (view) {
      case 'index':
        break;
      case 'collection':
        break;
      case 'search':
        break;
      case 'product':
        break;
      case 'blog':
        break;
      case 'page.contact':
        break;
      case 'page':
        break;
      default:
        console.log(view);
    }
  },
};
$(document).ready(() => {
  RS.init();
});
