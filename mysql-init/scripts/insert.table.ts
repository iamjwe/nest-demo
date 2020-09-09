import { getConnection, getManager, getRepository } from "typeorm";
import { Group } from "../table/group";
import { GroupRole } from "../table/group-role";
import { GroupUser } from "../table/group-user";
import { Permission } from "../table/permission";
import { ResetPassword } from "../table/reset-password";
import { Role } from "../table/role";
import { User } from "../table/user";
import { UserRole } from "../table/user-role";
import { initialUsers } from "../data/user";
import { initialPermissions } from "../data/permission";
import { initialRole } from "../data/role";

export async function insertData() {
  const groupRepository = getRepository(Group);
  const groupRoleRepository = getRepository(GroupRole);
  const groupUserRepository = getRepository(GroupUser);
  const permissionRepository = getRepository(Permission);
  const resetPasswordRepository = getRepository(ResetPassword);
  const roleRepository = getRepository(Role);
  const userRepository = getRepository(User);
  const userRoleRepository = getRepository(UserRole);

  await permissionRepository.save(initialPermissions);
  await roleRepository.save(initialRole);
  await userRepository.save(initialUsers);
  return Promise.resolve()
}