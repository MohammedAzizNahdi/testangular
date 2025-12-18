import { Component } from '@angular/core';
import { User } from '../models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
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
  id!: number;
  userForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) {}
  ngOnInit() {   
    this.id = this.activatedRoute.snapshot.params['id'];
      this.userService.findUserById(this.id).subscribe(data => {
        this.user = data.user;
        console.log(this.user);
        this.userForm = new FormGroup({
        name: new FormControl(this.user.name, [Validators.required, Validators.minLength(3)]),
        email: new FormControl(this.user.email, [Validators.required, Validators.email]),
        role: new FormControl(this.user.role, Validators.required),
        created_at: new FormControl((this.user.created_at as string).split('T')[0]),
        status: new FormControl(this.user.status, Validators.required)
      });
    });
    
  }

  get email() {
    return this.userForm.get('email');
  }

  get status() {
    return this.userForm.get('status');
  }

  updateUser(){
    console.log("User Updated:", this.userForm.value);
    this.userService.updateUser(this.id, this.userForm.value).subscribe(
      (data: User) => {
        console.log("User updated successfully:", data);
        this.router.navigate(['/user/list']);
      }
    );
  }
}
