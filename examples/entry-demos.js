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
};
