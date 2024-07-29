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

  ngOnInit() {}

  signIn(formValues: any) {
    const email: string = this.userToLogIn.email;
    const password: string = this.userToLogIn.password;
    if (email && password) {
      this.loading = true;
      this.authenticationService.signIn(email, password).subscribe(
        (res) => {
          this.loading = false;
          this.messageService.sendMessage('vous êtes connecté');
          // console.log(
          //   'res from login component : ',
          //   this.authenticationService.getUserDetails
          // );

          // Navigate based on role or just navigate to a default route
          // if (this.authenticationService.isAdmin()) {
          //   this.router.navigate(['admin']);
          // } else {
          //   this.router.navigate(['cart']);
          // }
          this.router.navigate(['']); // Default navigation route after login
        },
        (err) => {
          this.loading = false;
          this.router.navigate(['']);
          this.messageService.sendMessage('e-mail ou mot de passe incorrect');
        }
      );
    } else {
      this.messageService.sendMessage(
        'Veuillez remplir les champs email et mot de passe'
      );
    }
  }
}
