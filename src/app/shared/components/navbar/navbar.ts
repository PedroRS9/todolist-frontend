import {Component, Input, signal} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatMenuTrigger, MatMenu, MatMenuItem],
  templateUrl: './navbar.html',
  standalone: true,
  styleUrl: './navbar.css'
})
export class Navbar {
  @Input() title = 'To-do list';
  isAuthenticated = signal(false);

  logout(): void {
    // TODO: Implement logout logic
    this.isAuthenticated.set(false);
  }

}
