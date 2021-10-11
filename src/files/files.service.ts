import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as fs from 'fs'
import * as path from 'path'
import * as uuid from 'uuid'

@Injectable()
export class FilesService {
    async createFile(file): Promise<string> {
        try {
            const fileName = uuid.v4() + '.jpg'
            const filepath = path.resolve(__dirname, '..', 'static')
            if (!fs.existsSync(filepath)){
                fs.mkdirSync(filepath, {recursive:true})
            }
            fs.writeFileSync(path.join(filepath, fileName), file.buffer)
            return fileName
        } catch (e) {
            throw new HttpException('Save file error', HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }
}
