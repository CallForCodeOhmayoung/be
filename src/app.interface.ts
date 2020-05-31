import CreateIdentificationDto from './identification/dto/create-identification.dto';
import { Observable } from 'rxjs';

interface AppInterface {
  generateQrCode({
    name,
    phoneNumber,
  }: CreateIdentificationDto): Observable<string>;
}

export default AppInterface;
