import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RbacStrategy } from '../../modules/auth/strategy/rbac/rbac.strategy';

@Injectable()
export class AuthzGuard implements CanActivate {
  constructor(private readonly rbacStrategy: RbacStrategy) {
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.rbacStrategy.validate();
  }
}