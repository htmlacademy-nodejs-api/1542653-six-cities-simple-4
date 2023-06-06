import typegoose, { getModelForClass, defaultClasses, Ref } from '@typegoose/typegoose';
import { CommentSchemaLimits } from './comment.contants.js';
import { UserEntity } from '../user/user.entity.js';
import { OfferEntity } from '../offer/offer.entity.js';

const { prop, modelOptions} = typegoose;

export interface CommentEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'comments'
  }
})
export class CommentEntity extends defaultClasses.TimeStamps {

  @prop({
    trim: true,
    required: true,
    minlength: CommentSchemaLimits.MIN_COMMENT_TEXT_LENGTH,
    maxlength: CommentSchemaLimits.MAX_COMMENT_TEXT_LENGTH,
  })
  public text!: string;

  @prop({
    required: true,
    min: CommentSchemaLimits.MIN_COMMENT_RATING,
    max: CommentSchemaLimits.MAX_COMMENT_RATING,
  })
  public rating!: number;

  @prop({
    required: true,
    ref: UserEntity,
  })
  public authorId!: Ref<UserEntity>;

  @prop({
    required: true,
    ref: OfferEntity
  })
  public offerId!: Ref<OfferEntity>;

}

export const CommentModel = getModelForClass(CommentEntity);
