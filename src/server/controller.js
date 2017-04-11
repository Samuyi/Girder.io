// @flow

export const homePage = () => null;

export const helloAsyncPage = () => ({
  hello: { messageAsync: 'Server-side preloaded message for async page' },
});

export const helloPage = () => ({
  hello: { message: 'Server-side preloaded message ' },
});

export const helloEndpoint = (num: number) => ({
  serverMessage: `Hello from the server! (recieved ${num})`,
});
