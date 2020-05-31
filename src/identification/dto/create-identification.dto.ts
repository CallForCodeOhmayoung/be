import { IsNotEmpty, IsPhoneNumber } from 'class-validator';
import CoordinateModel from '../model/coordinate.model';

class CreateIdentificationDto {
  @IsNotEmpty()
  public name: string;

  @IsPhoneNumber('KR')
  @IsNotEmpty()
  public phoneNumber: string;

  @IsNotEmpty()
  public coordinate: CoordinateModel;
}

export default CreateIdentificationDto;

