
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Arc-i-Tech/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "route": "/Arc-i-Tech"
  },
  {
    "renderMode": 1,
    "route": "/Arc-i-Tech/services"
  },
  {
    "renderMode": 1,
    "route": "/Arc-i-Tech/service/*"
  },
  {
    "renderMode": 1,
    "route": "/Arc-i-Tech/contact"
  },
  {
    "renderMode": 1,
    "route": "/Arc-i-Tech/about"
  },
  {
    "renderMode": 1,
    "redirectTo": "/Arc-i-Tech",
    "route": "/Arc-i-Tech/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 17485, hash: '6471f0a379d5d2199ce853f20e4c69257006e48d490c3db5d1f6c1dae082e9e9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 902, hash: '15bdd05f3c6517231dc5569f7e0968d8209c29c88594ce967889204d2ffa2f18', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DQXGYCFS.css': {size: 23713, hash: 'GJOFQvJGiwk', text: () => import('./assets-chunks/styles-DQXGYCFS_css.mjs').then(m => m.default)}
  },
};
