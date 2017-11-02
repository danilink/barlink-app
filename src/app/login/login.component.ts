import { Component} from '@angular/core';
import { Address} from '../address/address';
import { AddressService } from '../address/address-service';

@Component({
  selector: 'barlink-home',
  templateUrl: 'home.component.html',
  providers: [AddressService]
})
export class HomeComponent {

  addresses: Address[] = [];

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.addressService.getAddresses()
      .then(addresses => this.addresses = addresses.slice(1, 5));
  }

}
