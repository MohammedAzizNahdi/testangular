import { Component } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  user!: User;
  id!: number;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.userService.findUserById(this.id).subscribe(data => {
      this.user = data.user;
      console.log(this.user);
    });
  }


}
