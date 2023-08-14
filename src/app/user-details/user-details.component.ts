import { Component } from '@angular/core';
import { UserDetails, UsersService } from '../Api/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  userData: Array<UserDetails> = new Array<UserDetails>();
  userDetails: UserDetails;
  update:boolean = false;

  ngOnInit(): void {
    this.userDetails = new UserDetails();
    this.getAllUsers()
  }

  constructor(public data: UsersService) {}

  getAllUsers() {
    this.data.getAllUsers().subscribe((x) => {
      this.userData = x;
    });
  }

  addUsers() {
    this.data.addUser(this.userDetails).subscribe((res) => {
      this.getAllUsers();
      this.userDetails = new UserDetails();
    });
  }

  deleteUser(user){
    console.log(user);
    this.data.deleteUser(user.id).subscribe(res=>{
      this.getAllUsers();
    })
  }

  filldataUpdate(item){
    this.userDetails = item;
    this.update = true;
  }

  updateData(){
    this.data.updateUser(this.userDetails).subscribe(res=>{
      this.getAllUsers();
      this.userDetails = new UserDetails;
    })
  }
}
