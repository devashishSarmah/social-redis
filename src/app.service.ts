import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class AppService {
  private client: Redis;

  constructor() {
    this.client = new Redis();
  }

  add(key: string, data: any): void {
    this.client.set(key, JSON.stringify(data));
  }
}
