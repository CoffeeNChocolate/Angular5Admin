import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './/layouts/layout.component';

import { HomeComponent } from './pages/home/home.component';

import { ColorsComponent } from './pages/ui/colors/colors.component';
import { TypographyComponent } from './pages/ui/typography/typography.component';
import { PanelsComponent } from './pages/ui/panels/panels.component';
import { TabsComponent } from './pages/ui/tabs/tabs.component';
import { AlertsComponent } from './pages/ui/alerts/alerts.component';
import { CardsComponent } from './pages/ui/cards/cards.component';
import { BadgesProgressComponent } from './pages/ui/badges-progress/badges-progress.component';
import { ListComponent } from './pages/ui/list/list.component';
import { IconsComponent } from './pages/ui/icons/icons.component';
import { ButtonsComponent } from './pages/ui/buttons/buttons.component';
import { TablesComponent } from './pages/tables/tables.component';
import { VendorComponent } from './pages/vendor/vendor.component';
import { OrderComponent } from './pages/orders/order.component';
import { CheckListComponent } from './pages/checkList/check-list.component';
import { NotesComponent } from './pages/notes/notes.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './helper/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    {
        "path": "",
        "component": LayoutComponent,
        "children": [
            {
                path: "index",
                component: HomeComponent, canActivate: [AuthGuard]
            },
            {
                path: "table",
                component: TablesComponent
            },
            {
                path: "vendor",
                component: VendorComponent
            },
            {
                path: "Orders",
                component: OrderComponent
            },
            {
                path: "Check-List",
                component: CheckListComponent
            },
            {
                path: "Notes",
                component: NotesComponent
            },

        ]
    },
    {
        "path": "login",
        "component": LoginComponent
    },

    {
        "path": "**",
        "redirectTo": "error_404",
        "pathMatch": "full"
    },
];

@NgModule({
    declarations: [
        HomeComponent,
        ColorsComponent,
        TypographyComponent,
        PanelsComponent,
        TabsComponent,
        AlertsComponent,
        CardsComponent,
        BadgesProgressComponent,
        ListComponent,
        IconsComponent,
        ButtonsComponent,
        LoginComponent

    ],
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule,
    ]
})

export class AppRoutingModule { }
