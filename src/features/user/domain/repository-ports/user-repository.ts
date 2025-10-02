import type { User } from "../entities/user-entity";
import type { UpdateUserPassword } from "../dtos/update-user-password.dto";

export interface IUserRepository {
    save(user: User): Promise<void>;
    updatePassword(args: UpdateUserPassword): Promise<void>;
};