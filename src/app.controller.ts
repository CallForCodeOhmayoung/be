import { Controller, Body, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IdentificationService } from './identification/identification.service';
import CreateIdentificationDto from './identification/dto/create-identification.dto';
import AppInterface from './app.interface';

@Controller()
export class AppController implements AppInterface {
  public constructor(
    private readonly identificationService: IdentificationService,
  ) {}

  @Post('generate')
  public generateQrCode(
    @Body() { name, phoneNumber }: CreateIdentificationDto,
  ): Observable<string> {
    return this.identificationService.generateToURL(name, phoneNumber);
  }
}
