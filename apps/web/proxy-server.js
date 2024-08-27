const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// 프록시 설정
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://localhost:5173/', // API 서버 주소
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/api', // API 요청 경로를 재작성
    },
    onProxyReq: (proxyReq, req, res) => {
      // 요청에 추가적인 헤더가 필요하면 여기서 추가
      proxyReq.setHeader('Origin', 'https://recipic-web.vercel.app');
    },
  }),
);

app.listen(3001, () => {
  console.log('Proxy server is running on http://localhost:3001');
});
