import { Injectable } from '@angular/core';

import { Address } from './address';
import { HEROES } from './mock-address';

@Injectable()
export class AddressService {
  getAddresses(): Promise<Address[]> {
    return Promise.resolve(HEROES);
  }

  // See the "Take it slow" appendix
  getAddressesSlowly(): Promise<Address[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getAddresses()), 2000);
    });
  }

  getAddress(id: number): Promise<Address> {
    return this.getAddresses()
               .then(addresses => addresses.find(address => address.id === id));
  }
}
