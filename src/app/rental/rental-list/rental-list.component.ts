import { Component, OnInit } from '@angular/core';
// import { Capability } from 'protractor';
import {RentalService} from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  noOfTimeRentals: Rental[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
  const rentalObservalbe = this.rentalService.getRentals();

  rentalObservalbe.subscribe(
    (data: Rental[])=>{
 
      this.noOfTimeRentals=data; 
      
    },
    (error)=>{},
    ()=>{}

  );

  }

} 
 