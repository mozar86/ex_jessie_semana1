import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  private customers = [];
  

  remove(id:number) {
    const index = this.customers.findIndex(customer => customer.id === id)
    if(index === -1) {
      throw new NotFoundException(`O cliente com o id: ${id} não foi encontrado`)
    }
    this.customers.splice(index, 1)
    return 'O cliente foi deletado com sucesso.'
  }
}
