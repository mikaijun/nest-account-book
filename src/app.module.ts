import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver } from '@nestjs/apollo';
import { AccountBookModule } from './modules/account-book.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      // schemaファイルのパスを指定
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // 生成されたschemaを自動でsortされるためのオプションをオンにする
      sortSchema: true,
    }),
    AccountBookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
