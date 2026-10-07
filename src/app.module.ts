import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CoffeesController } from './coffees/coffees.controller.js';
import { CoffeesService } from './coffees/coffees.service.js';
import { CoffeesModule } from './coffees/coffees.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: '2312312312312312',
      appSecret: '231123312312132132132132312',
      serviceId: 'iluvcoffee',
    }),
    CoffeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
