import type { User } from "../../domain/entities/UserEntity";
import type { UpdateUserPassword } from "../../domain/dtos/UpdateUserPassword.dto";

import { IUserRepository } from "../../domain/repository-ports/UserRepository";

export class UserRepository implements IUserRepository {
    save(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }

    updatePassword(args: UpdateUserPassword): Promise<void> {
        throw new Error("Method not implemented.");
    }
};