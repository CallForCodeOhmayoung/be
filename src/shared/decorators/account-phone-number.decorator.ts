import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AccountPhoneNumber = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.headers['account-phone-number'];
  },
);