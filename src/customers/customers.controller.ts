import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Post('create')
  create(
    @Body() bodyRequest: { firstName: string; lastName: string; age: number },
  ) {
    return this.customersService.create(bodyRequest);
  }

  @Get()
  findAll(@Query('age', ParseIntPipe) age?: number) {
    return this.customersService.findAll(age);
  }
}
