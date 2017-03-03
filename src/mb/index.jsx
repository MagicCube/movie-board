import React from 'react';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import { configStore } from './store';
import { configRoutes } from './routes';

import './res/index.less';

const store = configStore();

$(() => {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        {configRoutes()}
      </Router>
    </Provider>,
    document.getElementById('mbMountPoint')
  );

  try {
    console.log('%c', 'padding: 20px 300px; line-height: 50px; background:url(http://henryli-movie-board.daoapp.io/assets/images/mb-logo.png) no-repeat;');
  } catch (e) {

  }
  console.info('WELCOME ABOARD, DEVELOPERS!');
  console.info('Feel free to send me email via henry1943@163.com');
  console.info('And don\'t forget to star my project on Github :)');
  console.info('%c想看源代码？不用麻烦，这是一个开源项目', 'font-size: 16px; color: #E50914;');
  console.info('%c直接 Star 我的 Github 项目呗！', 'font-size: 16px; color: #E50914;');
  console.info('%chttps://github.com/MagicCube/movie-board/', 'font-size: 14px;');
});
