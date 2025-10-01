import type { User } from "../entities/UserEntity";
import type { UpdateUserPassword } from "../dtos/UpdateUserPassword.dto";

export interface IUserRepository {
    save(user: User): Promise<void>;
    updatePassword(args: UpdateUserPassword): Promise<void>;
};