import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNofitificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId!: string;

  @IsNotEmpty()
  @Length(5, 250)
  content!: string;

  @IsNotEmpty()
  category!: string;
}
