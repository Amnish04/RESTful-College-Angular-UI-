import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    get currentPath(): string {
        return this.location.path();
    }

    constructor(private location: Location) { }

    ngOnInit(): void {
    }

}
