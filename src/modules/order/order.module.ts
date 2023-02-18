import { Module } from '@nestjs/common';
import OrderRepository from './adapters/driven/order.repository';
import OrderController from './adapters/driving/order.controller';
import OrderService from './domain/order.service';
import { IOrderRepository } from './domain/ports/out/order.driven-port';

@Module({
  controllers: [OrderController],
  providers: [
    OrderService,
    { provide: IOrderRepository, useClass: OrderRepository },
  ],
})
export default class OrderModule {}
