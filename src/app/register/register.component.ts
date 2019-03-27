import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  messageForm:FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private data: DataService) { 

    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    })
  }

  onSubmit() {
    this.submitted = true;
  
    if(this.messageForm.invalid){
      //console.log(this.messageForm.controls);
      return;
    }
    this.success = true;
    const name = this.messageForm.controls.name.value;
    console.log(this.messageForm.controls.name);
    const surname = this.messageForm.controls.surname.value;
    const email = this.messageForm.controls.email.value;
    const password = this.messageForm.controls.password.value;

let user = {
  "name": name,
  "surname": surname,
  "email": email,
  "password": password
}

    this.data.registerUser(user).subscribe();
  }

  ngOnInit() {
  }

}
