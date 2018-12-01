import { Injectable } from '@nestjs/common';

@Injectable()
export class CashiersService {
  private readonly cashiers: string[] = ['Squidward', 'Patrick'];

  findAll(): string[] {
    return this.cashiers;
  }

  create(cashier: string) {
    this.cashiers.push(cashier.valueOf());
  }
}