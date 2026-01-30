import { http, HttpResponse } from 'msw';

export const TEST_HOST = 'http://localhost:8088';

const MOCK_ACCESS_TOKEN = 'test-access-token';

const loginApiKeyHandler = jest.fn().mockImplementation(() => {
  return HttpResponse.json({
    access_token: MOCK_ACCESS_TOKEN,
    token_type: 'bearer',
  });
});

const loginEmailHandler = jest.fn().mockImplementation(() => {
  return HttpResponse.json({
    access_token: MOCK_ACCESS_TOKEN,
    token_type: 'bearer',
  });
});

export const commonHandlers = [
  http.post(`${TEST_HOST}/login/api_key`, loginApiKeyHandler),
  http.post(`${TEST_HOST}/login`, loginEmailHandler),
];

export { loginApiKeyHandler, loginEmailHandler, MOCK_ACCESS_TOKEN };
