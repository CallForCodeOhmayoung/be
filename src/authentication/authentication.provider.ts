import { AccountEntity } from '@app/entities/account.entity';
import { AccessEntity } from '@app/entities/access.entity';

const authenticationProvider = [
  {
    provide: 'ACCOUNT_REPOSITORY',
    useValue: AccountEntity,
  },
  {
    provide: 'ACCESS_REPOSITORY',
    useValue: AccessEntity,
  },
];

export default authenticationProvider;
