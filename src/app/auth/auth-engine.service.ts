import { inject, Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
// import { OAuthService } from 'angular-oauth2-oidc';
// import { authCodeFlowConfig } from './oidc.config';

@Injectable({
  providedIn: 'root',
})
export class AuthEngineService {
  private readonly oidcSecurityService = inject(OidcSecurityService);
  // constructor(private oauthService: OAuthService) {}

  // login() {
  //   this.oauthService.configure(authCodeFlowConfig);
  //   this.oauthService.loadDiscoveryDocumentAndLogin();
  // }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService
      .logoff()
      // .subscribe((result) => console.log(result));
  }
}
