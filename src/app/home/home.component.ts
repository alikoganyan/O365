import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loader: boolean;

  constructor(
    public authService: AuthService,
    private library: FaIconLibrary
  ) {
    library.addIcons(faSpinner);
  }

  ngOnInit(): void {
    this.loader = false;
  }

  async signIn(): Promise<void> {
    this.loader = true;
    await this.authService.signIn();
  }
}
