import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/auth_service/authentication.service';
import { MsgService } from '../service/msg_service/msg.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'], // Note: it should be styleUrls, not styleUrl
})
export class SignInComponent implements OnInit {
  userToLogIn: any = {
    email: '',
    password: '',
  };
  message: any;
  loading = false;

  constructor(
    private authenticationService: AuthenticationService,
    public messageService: MsgService,
    private router: Router
  ) {}

  ngOnInit() {
    // Subscribe to the message observable
    this.messageService.message$.subscribe((message) => {
      this.message = message;
    });
  }

  signIn(formValues: any) {
    const email: string = this.userToLogIn.email;
    const password: string = this.userToLogIn.password;
    if (email && password) {
      this.loading = true;
      this.authenticationService.signIn(email, password).subscribe(
        (res) => {
          this.loading = false; // Stop loading indicator on success
          this.messageService.sendMessage('vous êtes connecté');
          // Delay the navigation to ensure the message is shown
          setTimeout(() => {
            this.router.navigate(['']); // Navigate after a short delay
          }, 1000); // 1 second delay, adjust as needed
        },
        (err) => {
          this.loading = false; // Stop loading indicator on error
          // Log the error to debug what is being returned
          console.log('Error Response:', err);
          // Handle specific errors based on err.message instead of err.status
          const errorMessage =
            err.message === 'Invalid username or password'
              ? 'E-mail ou mot de passe incorrect'
              : 'Une erreur est survenue, veuillez réessayer';

          this.messageService.sendMessage(errorMessage);
        }
      );
    } else {
      this.messageService.sendMessage(
        'Veuillez remplir les champs email et mot de passe'
      );
    }
  }
}
