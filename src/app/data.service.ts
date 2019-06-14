import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  public async getData(ms) {
    await this.sleep(ms);
    return "abc " + ms + "ms";
  }

  async sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}
}