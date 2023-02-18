import { randomInt } from 'crypto';
import Order from '../../domain/model/order';
import { IOrderRepository } from '../../domain/ports/out/order.driven-port';

export default class OrderRepository implements IOrderRepository {
  orders: Order[] = [];
  constructor() {}

  create(order: Order) {
    order.id = randomInt(100);
    this.orders.push(order);

    return order;
  }

  get(id: number): Order {
    const order = this.orders.find((order) => order.id === id);
    return order;
  }

  getList() {
    return this.orders;
  }
}
