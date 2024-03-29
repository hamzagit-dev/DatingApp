import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model: any = {};

  @Output() cancelRegister = new EventEmitter();
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  register() {
    this.authService.register(this.model).subscribe(
      () => {
        console.log('registration successful');
      },
      (error) => {
        console.log(error);
      }
    );
    // {
    //   complete: () => {
    //     console.log('registration successful');
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // }
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
