import { MinLength, MaxLength, Max, Min, IsDecimal, IsMongoId } from 'class-validator';
import { CommentSchemaLimits } from '../comment.contants.js';
import { commentValidateErrorMessage } from './comment-validate-error-message.js';

export default class CreateCommentDto {
  @MinLength(CommentSchemaLimits.MIN_COMMENT_TEXT_LENGTH, {message: commentValidateErrorMessage.text.minLengthMessage })
  @MaxLength(CommentSchemaLimits.MAX_COMMENT_TEXT_LENGTH, {message: commentValidateErrorMessage.text.maxLengthMessage })
  public text!: string;

  @Min(CommentSchemaLimits.MIN_COMMENT_RATING, { message: commentValidateErrorMessage.rating.minRatingMessage })
  @Max(CommentSchemaLimits.MAX_COMMENT_RATING, { message: commentValidateErrorMessage.rating.maxRatingMessage })
  @IsDecimal({ 'decimal_digits': '1'}, { message: commentValidateErrorMessage.rating.decimalMessage })
  public rating!: number;

  @IsMongoId({})
  public authorId!: string;

  @IsMongoId({})
  public offerId!: string;
}
