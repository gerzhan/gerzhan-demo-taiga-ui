// import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://skclr8.logto.app/oidc',
  redirectUri: 'http://localhost:4200',
  clientId: 'o46gitg26k8lgd77vui7d',
  // responseType: 'id_token token',
  responseType: 'code',
  // scope: 'profile',
  scope: 'openid email',
  showDebugInformation: true,
  clearHashAfterLogin: false,
  strictDiscoveryDocumentValidation: false
};
