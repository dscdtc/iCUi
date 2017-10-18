export default {
  'quickstart': r => require.ensure([], () => r(require('./docs/quickstart.md')), 'quickstart.md'),
  'loading': r => require.ensure([], () => r(require('./docs/loading.md')), 'loading.md'),
  'switch-option': r => require.ensure([], () => r(require('./docs/switch-option.md')), 'switch-option.md'),
  'radio': r => require.ensure([], () => r(require('./docs/radio.md')), 'radio.md'),
  'toast': r => require.ensure([], () => r(require('./docs/toast.md')), 'toast.md'),
  'alert': r => require.ensure([], () => r(require('./docs/alert.md')), 'alert.md'),
  'confirm': r => require.ensure([], () => r(require('./docs/confirm.md')), 'confirm.md'),
  'slider': r => require.ensure([], () => r(require('./docs/slider.md')), 'slider.md'),
  'qrcode': r => require.ensure([], () => r(require('./docs/qrcode.md')), 'qrcode.md'),
  'button': r => require.ensure([], () => r(require('./docs/button.md')), 'button.md'),
  'flexbox': r => require.ensure([], () => r(require('./docs/flexbox.md')), 'flexbox.md'),
  'picker': r => require.ensure([], () => r(require('./docs/picker.md')), 'picker.md'),
  'navbar': r => require.ensure([], () => r(require('./docs/navbar.md')), 'navbar.md'),
  'search': r => require.ensure([], () => r(require('./docs/search.md')), 'search.md'),
  'icon': r => require.ensure([], () => r(require('./docs/icon.md')), 'icon.md'),
  'popup': r => require.ensure([], () => r(require('./docs/popup.md')), 'popup.md'),
  'textarea': r => require.ensure([], () => r(require('./docs/textarea.md')), 'textarea.md'),
  'group': r => require.ensure([], () => r(require('./docs/group.md')), 'group.md'),
<<<<<<< HEAD
  'input': r => require.ensure([], () => r(require('./docs/input.md')), 'input.md'),
  'countdown': r => require.ensure([], () => r(require('./docs/countdown.md')), 'countdown.md'),
  'slide': r => require.ensure([], () => r(require('./docs/slide.md')), 'slide.md'),
=======
  'sliderbar': r => require.ensure([], () => r(require('./docs/sliderbar.md')), 'sliderbar.md'),
>>>>>>> fix button display
};
