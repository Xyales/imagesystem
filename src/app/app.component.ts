import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { Menu, MenuItemModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';


@Component({
    selector: 'app-root',
    styleUrls: ['app.component.css'],
    templateUrl: 'app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('sidebarMenuInstance')
    public sidebarMenuInstance: SidebarComponent;
    public width: string = '300px';
    public mediaQuery: string = ('(min-width: 600px)');
    public target: string = '.main-content';
    public dockSize: string = '60px';
     public enableDock: boolean = true;
    constructor() {
        
    }
    public menuItems: MenuItemModel[] = [
        {
            text: 'Berichte',
            iconCss: 'icon-globe icon',
            items: [
                { text: 'Reportcalendar'},
                { text: 'Reportlist'}
            ]
        },
        {
            text: 'Notification',
            iconCss: 'icon-bell-alt icon',
            items: [
                { text: 'Message' },
                { text: 'Facebook' },
                { text: 'Twitter' }
            ]
        },
        {
            text: 'Userlist',
            iconCss: 'icon-comment-inv-alt2 icon',
        },
        {
            text: 'Export',
            iconCss: 'icon-bookmark icon',
        },
        {
            text: 'Profile ',
            iconCss: 'icon-user icon',
        },
        {
            text: 'Settings',
            iconCss: 'icon-eye icon',
        },
        {
            text: 'Info',
            iconCss: 'icon-tag icon',
            items: [
                { text: 'AGB' },
                { text: 'Datenschutz' },
                { text: 'Impressum' },
            ]
        }
    ];
    // open new tab
    newTabClick(): void {
        document.getElementById('newTab').setAttribute('href', location.href.split('#')[0] + 'sidebar/sidebar-menu');
    }

    openClick() {
        this.sidebarMenuInstance.toggle();
    }
};
// open new tab
