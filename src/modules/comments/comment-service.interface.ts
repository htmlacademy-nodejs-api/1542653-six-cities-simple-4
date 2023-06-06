import { DocumentType } from '@typegoose/typegoose';
import CreateCommentDto from './dto/create-comment.dto.js';
import { CommentEntity } from './comment.entity.js';

export interface CommentServiceInterface {
  findCommentsByOfferId: (offerId: string) => Promise<DocumentType<CommentEntity>[]>
  createComment: (dto: CreateCommentDto) => Promise<DocumentType<CommentEntity>>
}
