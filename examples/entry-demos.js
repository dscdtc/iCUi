export default {
  'loading': r => require.ensure([], () => r(require('./demos/loading.vue')), 'loading.vue'),
  'switch-option': r => require.ensure([], () => r(require('./demos/switch-option.vue')), 'switch-option.vue'),
  'radio': r => require.ensure([], () => r(require('./demos/radio.vue')), 'radio.vue'),
  'toast': r => require.ensure([], () => r(require('./demos/toast.vue')), 'toast.vue'),
  'alert': r => require.ensure([], () => r(require('./demos/alert.vue')), 'alert.vue'),
  'confirm': r => require.ensure([], () => r(require('./demos/confirm.vue')), 'confirm.vue'),
  'slider': r => require.ensure([], () => r(require('./demos/slider.vue')), 'slider.vue'),
  'qrcode': r => require.ensure([], () => r(require('./demos/qrcode.vue')), 'qrcode.vue'),
  'button': r => require.ensure([], () => r(require('./demos/button.vue')), 'button.vue'),
  'flexbox': r => require.ensure([], () => r(require('./demos/flexbox.vue')), 'flexbox.vue'),
  'picker': r => require.ensure([], () => r(require('./demos/picker.vue')), 'picker.vue'),
  'navbar': r => require.ensure([], () => r(require('./demos/navbar.vue')), 'navbar.vue'),
  'search': r => require.ensure([], () => r(require('./demos/search.vue')), 'search.vue'),
  'icon': r => require.ensure([], () => r(require('./demos/icon.vue')), 'icon.vue'),
  'popup': r => require.ensure([], () => r(require('./demos/popup.vue')), 'popup.vue'),
  'textarea': r => require.ensure([], () => r(require('./demos/textarea.vue')), 'textarea.vue'),
  'group': r => require.ensure([], () => r(require('./demos/group.vue')), 'group.vue'),
  'input': r => require.ensure([], () => r(require('./demos/input.vue')), 'input.vue'),
<<<<<<< HEAD
  'countdown': r => require.ensure([], () => r(require('./demos/countdown.vue')), 'countdown.vue'),
  'slide': r => require.ensure([], () => r(require('./demos/slide.vue')), 'slide.vue'),
=======
  'sliderbar': r => require.ensure([], () => r(require('./demos/sliderbar.vue')), 'sliderbar.vue'),
>>>>>>> fix button display
};
