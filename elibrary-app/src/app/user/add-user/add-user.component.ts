import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  addUserForm = this.formBuilder.group({
    username: '',
    password: '',
    email_address: ''
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    // Process checkout data here
    var user = this.addUserForm.value;
    console.warn('User created', user?.username + ' ' + user?.password);
    this.addUserForm.reset();
  }

}
