export type TPostAuthorizationCodeResponse = {
  grantType: string;
  accessToken: string;
  accessTokenExpiresIn: number;
};

export type TPostAuthorizationCodeBody = {
  authorizationCode: string;
};
