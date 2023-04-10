import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rental-agreement',
  templateUrl: './rental-agreement.component.html',
  styleUrls: ['./rental-agreement.component.css']
})
export class RentalAgreementComponent implements OnInit {


  constructor(private http:HttpClient) { }

  rentalForm = new FormGroup({
    Renters_Name: new FormControl(),
    Phone_Number: new FormControl(),
    Email_Address: new FormControl(),

    Event_Date: new FormControl(),
    Drop_Off_Location: new FormControl(),
    Drop_Off_Time: new FormControl(),
    Pick_Up_Time: new FormControl(),

    Package: new FormControl(),
    Ice_Cream_Selection: new FormControl(),
    Additional_Ice_Cream_Selection: new FormControl(),
    Neon_Sign: new FormControl()
  })
  ngOnInit(): void {
  }

  onSubmit()  {
    const customerRequest = this.rentalForm.value;
    this.http.post("", customerRequest)
    console.log(this.rentalForm.value);
  }

}
