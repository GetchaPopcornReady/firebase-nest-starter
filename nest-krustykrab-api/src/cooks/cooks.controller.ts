import {
    Get,
    Post,
    Body,
    Controller,
    UsePipes,
  } from '@nestjs/common';
  import { CooksService } from './cooks.service';
  import { Cook } from './cook.interface';
  import { CreateCookDto } from './create-cook.dto';
  import { ValidationPipe } from '../common/validation.pipe';

  @Controller('cooks')
  export class CooksController {

    constructor(private readonly cooksSerivce: CooksService) {}
  
    @Get()
    async findAll(): Promise<String>{
      return this.cooksSerivce.findAll();
    }
  
    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createCookDto:CreateCookDto) {
       return this.cooksSerivce.create(createCookDto);
    }
  }