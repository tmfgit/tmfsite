'use strict';

import spUtils from './Utils';

/*-----------------------------------------------
|   On page scroll for #id targets
-----------------------------------------------*/
spUtils.$document.ready(($) => {
  $('a[href*=\\#]:not([href=\\#])').click(function scrollTo() {
    // const $this = $(e.currentTarget);
    const $this = $(this);
    if (spUtils.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && spUtils.location.hostname === this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top - ($this.data('offset') || 0)),
        }, 400, 'swing', () => {
          window.location.hash = $this.attr('href');
        });
        return false;
      }
    }
    return true;
  });
});
