<template lang="pug">
  #st-container.st-container.st-effect-1
    #menu-1.st-menu.st-effect-1
      .toggle-panel.rotating
        i.fa.fa-cog(aria-hidden='true')
      .wide-boxed-section.buttons-list
        .item.wide.active(data-item='wide') Wide
        .item.boxed(data-item='boxed') Boxed
      .color-section
        .section-title Colors scheme:
        .colors-list.items-switcher
          .item.red.active(data-color-path='assets/css/colors/red.css', data-logo-path='assets/images/logo-red.png', data-footer-logo-path='assets/images/footer-logo-red.png')
          .item.blue(data-color-path='assets/css/colors/blue.css', data-logo-path='assets/images/logo-blue.png', data-footer-logo-path='assets/images/footer-logo-blue.png')
          .item.orange(data-color-path='assets/css/colors/orange.css', data-logo-path='assets/images/logo-orange.png', data-footer-logo-path='assets/images/footer-logo-orange.png')
          .item.green(data-color-path='assets/css/colors/green.css', data-logo-path='assets/images/logo-green.png', data-footer-logo-path='assets/images/footer-logo-green.png')
          .item.violet(data-color-path='assets/css/colors/violet.css', data-logo-path='assets/images/logo-violet.png', data-footer-logo-path='assets/images/footer-logo-violet.png')
      .positioning-header
        .section-title Positioning of header:
        .header-positions.buttons-list
          .item.fixed.active(data-item='fixed') Fixed
          .item.top(data-item='relative') Top
      .boxed-pattern
        .section-title Patterns:
        .patterns-list.items-switcher
          div
            .item.active(style='background-image: url(~assets/images/patterns/1.png);', data-path='assets/images/patterns/1.png')
            .item(style='background-image: url(~assets/images/patterns/2.png);', data-path='assets/images/patterns/2.png')
            .item(style='background-image: url(~assets/images/patterns/3.png);', data-path='assets/images/patterns/3.png')
            .item(style='background-image: url(~assets/images/patterns/4.png);', data-path='assets/images/patterns/4.png')
            .item(style='background-image: url(~assets/images/patterns/5.png);', data-path='assets/images/patterns/5.png')
          div
            .item(style='background-image: url(~assets/images/patterns/6.png);', data-path='assets/images/patterns/6.png')
            .item(style='background-image: url(~assets/images/patterns/7.png);', data-path='assets/images/patterns/7.png')
            .item(style='background-image: url(~assets/images/patterns/8.png);', data-path='assets/images/patterns/8.png')
            .item(style='background-image: url(~assets/images/patterns/9.png);', data-path='assets/images/patterns/9.png')
            .item(style='background-image: url(~assets/images/patterns/10.png);', data-path='assets/images/patterns/10.png')
      .boxed-background
        .section-title Backgrounds:
        .backgrounds-list.items-switcher
          .item.active(style='background-image: url(~assets/images/backgrounds/1-min.jpg);', data-path='assets/images/backgrounds/1.jpg')
          .item(style='background-image: url(~assets/images/backgrounds/2-min.jpg);', data-path='assets/images/backgrounds/2.jpg')
          .item(style='background-image: url(~assets/images/backgrounds/3-min.jpg);', data-path='assets/images/backgrounds/3.jpg')
          .item(style='background-image: url(~assets/images/backgrounds/4-min.jpg);', data-path='assets/images/backgrounds/4.jpg')
          .item(style='background-image: url(~assets/images/backgrounds/5-min.jpg);', data-path='assets/images/backgrounds/5.jpg')
    .st-pusher
</template>
