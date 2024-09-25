import { Controller, Delete, Get, ParseIntPipe, Post } from '@nestjs/common';

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

  @Delete('id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.costumersService.remove(id);
  }
}
