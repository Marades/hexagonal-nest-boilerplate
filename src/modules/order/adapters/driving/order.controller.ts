import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import OrderService from '../../domain/order.service';
import CreateOrderDto from './dto/create-order.dto';

@Controller('/orders')
export default class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() orderData: CreateOrderDto) {
    this.orderService.create(orderData);
  }

  @Get()
  getList() {
    return this.orderService.getList();
  }
}
