import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { SequelizeModule } from '@nestjs/sequelize'
import { Order } from './orders/entities/order.entity';


@Module({
  imports: [
    OrdersModule,
    // SequelizeModule.forRoot({
    //   dialect: 'sqlite',
    //   host: join(__dirname, 'database.sqlite'),
    //   models: [ Order ],
    //   autoLoadModels: true
    // })
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'db',
      port: 3306,
      database: 'nest_mysql',
      username: 'root',
      password: 'root',
      models: [ Order ],
      autoLoadModels: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
