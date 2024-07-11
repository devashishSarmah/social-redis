import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @MessagePattern({ cmd: 'ADD' })
  addToRedis(data: { key: string; payload: any }): void {
    this.appService.add(data.key, data.payload);
  }
}
