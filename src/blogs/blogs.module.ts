import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Blog } from './blog.model';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';

@Module({
  imports: [SequelizeModule.forFeature([Blog])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
