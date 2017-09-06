import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Address } from './address';
import { AddressService } from './address-service';

@Component({
  selector: 'address-list',
  templateUrl: './address-list.component.html',
  styleUrls: [ './address-list.css' ],
  providers: [AddressService]
})
export class AddressListComponent {
  addresses: Address[];
  selectedAddress : Address;

  constructor(private addressService: AddressService, private router: Router) { }

  getAddresses(): void {
    this.addressService.getAddresses().then(addresses => this.addresses = addresses);
  }

  ngOnInit(): void {
    this.getAddresses();
  }

  onSelect(address: Address): void {
    this.selectedAddress = address;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedAddress.id]);
  }

 }
