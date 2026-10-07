import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller.js';
import { CoffeesService } from './coffees.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity.js';
import { Flavor } from './entities/flavor.entity.js';
import { Event } from '../event/entities/event.entity.js';

@Module({ 
  imports: [TypeOrmModule.forFeature([Coffee,Flavor,Event])],
  controllers: [CoffeesController],
  providers: [CoffeesService] 
})
export class CoffeesModule {}