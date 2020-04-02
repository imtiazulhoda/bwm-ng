import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {Rental} from './rental.model'

@Injectable()
export class RentalService{

  public getRentalById(rentalId: string): Observable<Rental> {
    return new Observable<Rental>((observer) => {
      setTimeout(() => {
        const foundRental =this.rentals.find(reental => {return reental.id === rentalId;});
        observer.next(foundRental)
      }, 500);
    });
  }

public getRentals(): Observable<Rental[]> {
  return new Observable<Rental[]>((observer) => {

    
  setTimeout(() => {
    observer.next(this.rentals)
  }, 1000);

 

  });
  
  
  

}
private rentals:Rental[]=[

  {
      id: "1",
      title: "First floor Portion",
      city: "Karachi",
      street: "Gulshan Iqbal, Block 4A",
      category: "Portion",
      image: "http://via.placeholder.com/350*250",
      bedrooms: 3,
      description: "Newly build, West Open",
      dailyAate: 800,
      shared: false,
      createdAt: "29/3/2020"
    },
    {
      id:"2",
      title: "Second floor Portion",
      city: "Karachi",
      street: "Gulshan Iqbal, Block 4A",
      category: "Portion",
      image: "http://via.placeholder.com/350*250",
      bedrooms: 1,
      description: "Newly build, West Open",
      dailyAate: 800,
      shared: false,
      createdAt: "25/3/2020"
    },
    {
      id: "3",
      title: "First floor Flat",
      city: "Karachi",
      street: "Gulshan Iqbal, Block 4A",
      category: "appartment",
      image: "http://via.placeholder.com/350*250",
      bedrooms: 3,
      description: "Newly build, West Open",
      dailyAate: 600,
      shared: false,
      createdAt: "28/3/2020"
    },
    {
      id: "4",
      title: "Office  Portion",
      city: "Karachi",
      street: "Cifton",
      category: "office",
      image: "http://via.placeholder.com/350*250",
      bedrooms: 3,
      description: "24hrs open with electricity",
      dailyAate: 1500,
      shared: false,
      createdAt: "29/3/2020"
    }
  ];
}