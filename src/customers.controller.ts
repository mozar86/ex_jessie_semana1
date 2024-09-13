import { Controller, Get, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  constructor(private Service: CustomersService) {}

  @Post('create')
  create(
    @Body() bodyRequest: { firstName: string; lastName: string; age: number }
  ) {
    return this.customersService.create(bodyRequest);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }
}
