document.documentElement.className += 'ontouchstart' in document.documentElement ? ' wt_mobile ' : ' wt_desktop ';

Modernizr.load([
  {
    test: Modernizr.mq('only all'),
    nope: besmart_uri + '/js/vendor/respond.min.js'
  }
]);