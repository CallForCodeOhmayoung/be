import TaggingDto from '@app/shared/dto/tagging.dto';
import { Observable } from 'rxjs';

interface AppInterface {
  tagging({ address, isOut }: TaggingDto): Observable<void>;
}

export default AppInterface;
