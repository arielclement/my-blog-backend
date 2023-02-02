import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Blog } from './blog.model';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blog)
    private blogModel: typeof Blog,
  ) {}

  async create(createBlogDto: CreateBlogDto) {
    const newBlog = await this.blogModel.create({
      title: createBlogDto.title,
      body: createBlogDto.body,
      author: createBlogDto.author,
    });

    return newBlog;
  }

  async findAll(): Promise<Blog[]> {
    return this.blogModel.findAll();
  }

  async findOne(id: number): Promise<Blog> {
    return this.blogModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateBlogDto: UpdateBlogDto): Promise<void> {
    const blogToUpdate = await this.findOne(id);
    await blogToUpdate.update({
      title: updateBlogDto.title,
      body: updateBlogDto.body,
      author: updateBlogDto.author,
    });
  }

  async remove(id: number): Promise<void> {
    const blog = await this.findOne(id);
    await blog.destroy();
  }
}
