import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  // // @TranslationsField({ type: CreateTranslationDto })
  // title: CreateTranslationDto[];

  // @TranslationsField({ type: CreateTranslationDto })
  // description: CreateTranslationDto[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly description: string;
}
