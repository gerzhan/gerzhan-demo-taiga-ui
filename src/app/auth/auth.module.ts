import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// @see https://github.com/damienbod/angular-auth-oidc-client/tree/version-13
import { AuthModule as OAuthModule, LogLevel } from 'angular-auth-oidc-client';
// import { buildAngularAuthConfig } from '@logto/js';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthEngineService } from './auth-engine.service';

@NgModule({
  declarations: [SignInComponent, SignOutComponent, SignUpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OAuthModule.forRoot({
      config: {
        // buildAngularAuthConfig({
        //   endpoint: '<your-logto-endpoint>',
        //   appId: '<your-app-id>',
        //   redirectUri: 'http://localhost:3000/callback',
        //   postLogoutRedirectUri: 'http://localhost:3000/',
        // }),
        authority: 'https://skclr8.logto.app/oidc',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'o46gitg26k8lgd77vui7d',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      },
    }),
  ],
})
export class AuthModule {
  constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
    throwIfAlreadyLoaded(parentModule, 'AuthModule');
  }

  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        // Обязательные провайдеры
        AuthEngineService,
      ],
    };
  }
}

// TODO: use common
function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      `${moduleName} has already been loaded. Import Core modules in the AppModule only.`
    );
  }
}
