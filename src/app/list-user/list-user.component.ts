import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {
  userList!: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findAllUsers().subscribe(users => {
      console.log(users);
      
      this.userList = users as User[];
      console.log(this.userList);
    }); 
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(() => {
      console.log(`User with id ${id} deleted successfully.`);
      this.userList = this.userList.filter(user => user.id !== id);
    });
  }

}
