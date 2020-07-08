import { Selector } from "testcafe";

class CustomerPage {
  constructor() {
    this.ordersLink = Selector('a').withText('ORDERS')
    this.noOrdersLabel = Selector('div.no-data').withText('No orders');
  }
}

export default new CustomerPage();
