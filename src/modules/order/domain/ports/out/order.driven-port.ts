import Order from '../../model/order';

export const IOrderRepository = Symbol('IOrderRepository');
export interface IOrderRepository {
  create(order: Order): Order;
  get(id: number): Order;
  getList(): Order[];
}
