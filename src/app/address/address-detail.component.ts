import { switchMap, map } from 'rxjs/operators';
import { interval, pipe } from 'rxjs';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Address} from './address';
import { AddressService } from './address-service';

@Component({
  selector: 'address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.css'],
  providers: [AddressService]
})
export class AddressDetailComponent {

  address: Address;

  constructor(private addressService: AddressService,
              private route: ActivatedRoute,
              private location: Location
    ) {}

  ngOnInit(): void {
      this.route.params.pipe(
      switchMap((params: Params) => this.addressService.getAddress(+params['id'])))
      .subscribe(address => this.address = address);
  }

  goBack(): void {
    this.location.back();
  }

 }
