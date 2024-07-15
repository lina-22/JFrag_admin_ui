import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/auth_service/authentication.service';
import { MsgService } from '../../service/msg_service/msg.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  userToLogIn: any = {
    email:  '',
    password: ''
  };
   message: any;
  loading = false;
    constructor(private authenticationService: AuthenticationService, 
              // private clientService: ClientService,
              public messageService: MsgService,
              private router: Router) {}

              ngOnInit() {}

              // signIn(formValues) 
 signIn(formValues: any) {
    const email: string = this.userToLogIn.email;
    const password: string = this.userToLogIn.password;
    if(email && password) {
        this.authenticationService.signIn(email, password).subscribe(
      (res) => {
        this.messageService.sendMessage("vous êtes connecté");
        console.log(
          "res from login component : ",
          this.authenticationService.decoded_token
        );
        // if (this.authenticationService.isAdmin()) {
        //   this.router.navigate(['admin']);
        // } else {
        //   this.router.navigate(['cart']);
        // }
        console.log(res);
        
        this.messageService.sendMessage("vous êtes connecté");
      },
      (err) => {
        this.router.navigate(['']);
        this.messageService.sendMessage("e-mail ou mot de passe incorrect");
      });
    } 
   }
}
