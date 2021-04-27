import { analyzeAndValidateNgModules, ArrayType } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  mobileQuery!: MediaQueryList;
  fillerNav = [
    {name: "home", route:"", icon:"home"},
    {name: "contato", route:"contato", icon:"perm_contact_calendar"},
    {name: "home", route:"", icon:"home"},
    {name: "contato", route:"contato", icon:"perm_contact_calendar"},
    {name: "home", route:"", icon:"home"},
    {name: "contato", route:"contato", icon:"perm_contact_calendar"},
    {name: "home", route:"", icon:"home"},
    {name: "contato", route:"contato", icon:"perm_contact_calendar"},
    {name: "home", route:"", icon:"home"},
    {name: "contato", route:"contato", icon:"perm_contact_calendar"},
    {name: "home", route:"", icon:"home"},
    {name: "contato", route:"contato", icon:"perm_contact_calendar"},
    {name: "home", route:"", icon:"home"},
    {name: "contato", route:"contato", icon:"perm_contact_calendar"},
    {name: "home", route:"", icon:"home"},
    {name: "contato", route:"contato", icon:"perm_contact_calendar"},
    {name: "home", route:"", icon:"home"},
    {name: "contato", route:"contato", icon:"perm_contact_calendar"},
    {name: "home", route:"", icon:"home"},
    {name: "contato", route:"contato", icon:"perm_contact_calendar"},
    {name: "home", route:"", icon:"home"},
    {name: "contato", route:"contato", icon:"perm_contact_calendar"},
    {name: "home", route:"", icon:"home"},
    {name: "contato", route:"contato", icon:"perm_contact_calendar"},
    {name: "logout", route:"", icon:"logout"}
  ]

  private _mobileQueryListener!: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener)
    
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void{
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener)
  }

  shouldRun = true;
  opened = true;

  teste(){

  }
}
