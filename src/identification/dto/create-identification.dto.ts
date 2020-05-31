import { IsNotEmpty, IsPhoneNumber } from 'class-validator';

class CreateIdentificationDto {
  @IsNotEmpty()
  public name: string;

  @IsPhoneNumber('KR')
  @IsNotEmpty()
  public phoneNumber: string;
}

export default CreateIdentificationDto;
