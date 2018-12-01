import { Module } from '@nestjs/common';
import { CooksController } from './cooks/cooks.controller';
import { CooksService } from './cooks/cooks.service';
import { CashiersController } from './cashiers/cashiers.controller';
import { CashiersService } from './cashiers/cashiers.service';

@Module({
  imports: [],
  controllers: [CooksController,CashiersController],
  providers: [CooksService,CashiersService],
})
export class AppModule {}
