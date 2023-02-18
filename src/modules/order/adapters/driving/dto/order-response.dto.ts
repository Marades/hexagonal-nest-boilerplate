import Order from 'src/modules/order/domain/model/order';

export default class OrderResponse {
  readonly id: number;
  readonly price: number;
  readonly vat: number;
  readonly priceWithVat: number;

  constructor(order: Order) {
    this.id = order.id;
    this.price = order.price;
    this.vat = order.vat;
    this.priceWithVat = order.priceWithVat;
  }
}
