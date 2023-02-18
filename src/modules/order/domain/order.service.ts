import { Inject, Injectable } from '@nestjs/common';
import CreateOrderDto from '../adapters/driving/dto/create-order.dto';
import OrderResponse from '../adapters/driving/dto/order-response.dto';
import Order from './model/order';
import { IOrderRepository } from './ports/out/order.driven-port';

@Injectable()
export default class OrderService {
  constructor(
    @Inject(IOrderRepository)
    private readonly orderRepository: IOrderRepository,
  ) {}

  create(orderData: CreateOrderDto) {
    const order: Order = new Order(orderData);
    order.validate();

    this.orderRepository.create(order);
  }

  getList(): OrderResponse[] {
    const orders: Order[] = this.orderRepository.getList();
    return orders.map((order) => new OrderResponse(order));
  }
}
