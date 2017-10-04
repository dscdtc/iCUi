
import componentDocs from '../examples/entry-docs';
import componentDemos from '../examples/entry-demos';
import './iframe-router';

const navs = require('./doc.config')['zh-CN'].nav;

const registerRoute = (isExample) => {
  const route = [{
    path: '*',
    redirect: '/'
  }];

  navs.forEach(nav => {
    if (isExample && !nav.showInMobile) {
      return;
    }

    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(addRoute);
      });
    } else if (nav.children) {
      nav.children.forEach(addRoute);
    } else {
      addRoute(nav);
    }
  });

  function addRoute(page) {
    const { path } = page;
    if (path) {
      const name = path.replace('/', '');
      route.push({
        path: '/component' + path,
        component: isExample ? componentDemos[name] : componentDocs[name]
      });
    }
  }

  return route;
};

export default registerRoute;