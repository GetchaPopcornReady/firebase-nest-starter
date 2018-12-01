import {
    Get,
    Post,
    Body,
    Controller,
  } from '@nestjs/common';
  import { CashiersService } from './cashiers.service';
  
  @Controller('cashiers')
  export class CashiersController {

    constructor(private readonly cashierService: CashiersService) {}
  
    @Get()
    async findAll(): Promise<string[]> {
      return this.cashierService.findAll();
    }
  
    @Post()
    async create(@Body('cashier') cashier: string) {
  
      return this.cashierService.create(cashier);
    }
  }