import { AccountEntity } from '@app/entities/account.entity';

const authenticationProvider = [
  {
    provide: 'ACCOUNT_REPOSITORY',
    useValue: AccountEntity,
  },
];

export default authenticationProvider;
