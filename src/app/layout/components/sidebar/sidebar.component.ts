import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../../app/shared/guard/auth.service';
import { UserService } from '../../users/user.service';
import { ComponentGroup } from '../../../models/components-group';
import { ComponentList } from '../../../models/component-list';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';
    userID;
    list;
    userLevelID;
    navHederList;
    navGroupDetailList = [];
    navGroupHeaderList = [];
    navDetailList;
    newMenu;
    componentGroup;
    component;

    constructor(private translate: TranslateService, public router: Router,private userService: UserService) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });

        if (localStorage.getItem('firebase:authUser:AIzaSyDmSX9Wki73m_rWrFXphMish-V75CcCG7k:[DEFAULT]') != null) {
            let userDetails = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyDmSX9Wki73m_rWrFXphMish-V75CcCG7k:[DEFAULT]'));
            this.userID = userDetails.uid;
            //console.log(this.userID);
            let userDetailsts = userService.get(this.userID);

            this.list = userDetailsts.subscribe(item => {
                this.userLevelID = item.userlevelname;
                console.log(item.userlevelname);
                if (item.userlevelname != null) {
                  this.navHederList = userService.getNavHeaderList(this.userLevelID);
                  //console.log(this.navHederList);
                  this.navHederList.subscribe(i => i.forEach(i => {
                    i.userGroup.forEach(a => {
                      //console.log('UserLevel TEST: ' + a.icon);

                      this.componentGroup = userService.getComponentGroupHeaderList(a.UUID);
                      this.componentGroup.subscribe(b => b.forEach(c=>{
                        //console.log('UserLevel TEST: ' + c.icon);
                        let componentModel = new ComponentGroup;
                        componentModel.componentGroupName = c.componentGroupName;
                        componentModel.UUID = c.UUID;
                        componentModel.icon = c.icon;

                        this.navGroupHeaderList.push(componentModel);
                      }))
                      
                      //this.getNavDetails(a.UUID);
                    });
                  }));
                }
        
              });

        }

    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    getNavDetails(value: string) {
        this.navGroupDetailList = [];
        this.navDetailList = this.userService.getNavDetailsList(value);

        this.navDetailList.subscribe(h => h.forEach(h => {
        //console.log('UserLevel 20: '+h.component.url)
        h.component.forEach(e => {

            this.componentGroup = this.userService.getComponentHeaderList(e.uuid);
            this.componentGroup.subscribe(b => b.forEach(c=>{
                let component = new ComponentList;
                component.url = c.url;
                component.componentName = c.componentName;
                component.icon = c.icon;
                console.log('UserLevel 20: ' + c.icon);
                this.navGroupDetailList.push(component);

            }));

            
        });

        }));
        return this.navGroupDetailList;
    }

    addExpandClass(element: any,value: string) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
        this.newMenu = element;
        console.log('element ' + this.showMenu);
        console.log('element ' + this.newMenu);
        this.getNavDetails(value);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
