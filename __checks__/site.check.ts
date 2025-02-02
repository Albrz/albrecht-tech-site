import { ApiCheck, AssertionBuilder } from 'checkly/constructs'

new ApiCheck('site-health-check', {
  name: 'Albrecht Tech Site Health',
  alertChannels: [],
  degradedResponseTime: 3000,
  maxResponseTime: 10000,
  request: {
    url: 'https://albrechttech.com.br',
    method: 'GET',
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.responseTime().lessThan(3000),
    ],
  },
  runParallel: true,
})

// Verificar redirecionamento www para non-www
new ApiCheck('site-www-redirect-check', {
  name: 'Albrecht Tech WWW Redirect',
  alertChannels: [],
  degradedResponseTime: 3000,
  maxResponseTime: 10000,
  request: {
    url: 'https://www.albrechttech.com.br',
    method: 'GET',
    followRedirects: false,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(307),
      AssertionBuilder.headers('location').equals('https://albrechttech.com.br/'),
    ],
  },
  runParallel: true,
})
