import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { UserprofileListComponent } from './userprofiles/userprofile-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { TeamComponent } from './team/team.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const AppRoutes: Routes = [
    {
        path: 'home',
        component: WelcomeComponent
    },
    {
        path: 'profile',
        component: UserprofileListComponent
    },
    {
        path: 'leaderboard',
        component: LeaderboardComponent
    },
    {
        path: 'team',
        component: TeamComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
    // {
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
    // {
    //     path: '**',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // }
  ];

  export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);