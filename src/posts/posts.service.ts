import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Post} from "./posts.model";
import {CreatePostDto} from "./dto/create-post.dto";
import {FilesService} from "../files/files.service";

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post) private postRepository: typeof Post, private fileService: FilesService) {
    }

    async createPost(dto: CreatePostDto, image: any) {
        let fileName = await this.fileService.createFile(image)
        return await this.postRepository.create({...dto, image: fileName})
    }
}
