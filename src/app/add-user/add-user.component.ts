import { Component } from '@angular/core';
import { User } from '../models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
statusList: string[] = [
  'active',
  'inactive',
  'pending'
  ];

  user: User = {
    id: 0,
    name: '',
    email: '',
    role: '',
    created_at: (new Date()).toISOString().split('T')[0],
    status: null!
  };
  

  userForm!: FormGroup;

  constructor(private router: Router, private userService: UserService) {}
  ngOnInit() {    
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      role: new FormControl(this.user.role, Validators.required),
      created_at: new FormControl(this.user.created_at),
      status: new FormControl(this.user.status, Validators.required)
    });
  }

  get email() {
    return this.userForm.get('email');
  }

  get status() {
    return this.userForm.get('status');
  }

  addUser(){
    console.log("User Added:", this.userForm.value);
    this.userService.createUser(this.userForm.value).subscribe(
      (data: User) => {
        console.log("User created successfully:", data);
        this.router.navigate(['/user/list']);
      }
    );
  }

}
