// config.js
var configUrl = {
  apiUrl: 'http://localhost:80/api' // 默认设置为本地地址
};

if (window.location.hostname === 'hz-study-system.com') {
  configUrl.apiUrl = 'http://www.hz-study-system.com:81/api'; // 生产环境的地址
} else {
  configUrl.apiUrl = 'http://www.hz-study-system.com:81/api'; // 生产环境的地址
}
