import type { User } from "../../domain/entities/user-entity";
import type { UpdateUserPassword } from "../../domain/dtos/update-user-password.dto";

import { IUserRepository } from "../../domain/repository-ports/user-repository";

export class UserRepository implements IUserRepository {
    save(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }

    updatePassword(args: UpdateUserPassword): Promise<void> {
        throw new Error("Method not implemented.");
    }
};