import { Component} from '@angular/core';
import { Address} from '../address/address';
import { AddressService } from '../address/address-service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'barlink-home',
  templateUrl: 'home.component.html',
  providers: [AddressService]
})
export class HomeComponent {

  addresses: Address[] = [];

  constructor(public addressService: AddressService) { }

  ngOnInit(): void {
    this.addressService.getAddresses()
      .then(addresses => this.addresses = addresses.slice(1, 5));
  }

}
