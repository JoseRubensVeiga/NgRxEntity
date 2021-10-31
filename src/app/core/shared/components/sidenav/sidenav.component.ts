import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/core/models/MenuItem';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'Livros',
      url: '/books',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
