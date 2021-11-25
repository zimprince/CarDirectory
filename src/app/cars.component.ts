import { Component, OnInit } from '@angular/core';
import { Cars } from './cars.interface';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  carResults: any;
  value: any;
  car_array: Cars[] = [
    {
      name: 'Audi',
      description:
        '2 Door,Automatic Transmission,Fuel Consumption (6.9l/100km),4x4 24 inch rims, 755BHp, 524KW, 650Nm',
      model: 'Rs7',
    },
    {
      name: 'Bmw',
      description:
        '5l Engine Capacity. 4 Door, Automatic Transmission,Fuel Consumption (6.9l/100km) 24 inch rims, 425BHp, 224KW, 450Nm',
      model: 'M4 Sport',
    },
    {
      name: 'VW',
      description:
        '1.4 Engine Capacity. 4 Door, Manual Transmission,Fuel Consumption (1l/100km)',
      model: 'Polo',
    },
    {
      name: 'Mercedes',
      description:
        '6.3l Engine Capacity , 24 inch rims, 625BHp, 674KW, 750Nm, Sunroof, Day-Light Headlights',
      model: 'C63 AMG',
    },
    {
      name: 'Rolls Royce',
      description: '7l Engine Capacity, 24 inch rims, 925BHp, 824KW, 950Nm',
      model: 'Wraith',
    },
    {
      name: 'VW',
      description:
        '4.3l Engine Capacity, 24 inch rims, 425BHp, 624KW, 650Nm, Electric Seats and Windows',
      model: 'Golf 7R',
    },
    {
      name: 'Mercedes',
      description: '24 inch rims, 225BHp, 224KW, 450Nm',
      model: 'C200 Avantgarde',
    },
    {
      name: 'Haval',
      description:
        '2.0L Turbo charged engine producing 150kw and 320Nm at 6000rpm,Dynamic Steering Modes (Sport, Comfort, Light)  ',
      model: 'H6',
    },
    {
      name: 'Toyota',
      description:
        'Sedan 1.5 Sprint , Speed sensitive Electric Power Steering , Cruise Control ,19 Inch Alloy Wheels',
      model: 'Etios',
    },
  ];

  brandname: any;
  description: any;
  carmodel: any;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      $('#datatableexample').DataTable({
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu: [5, 10, 25],
      });
    }, 1);
  }

  onAddCar() {
    let car_obj: Cars[] = [
      {
        name: this.brandname,
        model: this.carmodel,
        description: this.description,
      },
    ];
    this.car_array.push(...car_obj);
    alert('Car Added Successfuly');
  }
  onDeleteCar(e: any) {
    this.carResults = this.car_array.splice(e, 1);
    alert('Car Deleted Successfuly');
  }
}
