import Alert from './alert';
import Button from './button';
import Confirm from './confirm';
import Flexbox from './flexbox';
import FlexboxItem from './flexbox-item';
import Icon from './icon';
import Loading from './loading';
import Navbar from './navbar';
import Picker from './picker';
import Popup from './popup';
import Qrcode from './qrcode';
import Radio from './radio';
import Slider from './slider';
import SwitchOption from './switch-option';
import Textarea from './textarea';
import Toast from './toast';

const version = '0.0.1';
const components = [
  Button,
  Flexbox,
  FlexboxItem,
  Icon,
  Loading,
  Navbar,
  Picker,
  Popup,
  Qrcode,
  Radio,
  Slider,
  SwitchOption,
  Textarea
];

const install = function(Vue) {
  if (install.installed) return;

  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Alert,
  Button,
  Confirm,
  Flexbox,
  FlexboxItem,
  Icon,
  Loading,
  Navbar,
  Picker,
  Popup,
  Qrcode,
  Radio,
  Slider,
  SwitchOption,
  Textarea,
  Toast
};
export default {
  install,
  version
};
