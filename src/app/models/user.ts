export class User {
    id: number;
    login: string;
    role: Role;
}

export enum Role {
    Admin = 1,
    Manager,
    Customer = 34,
    Qwerty,
}

/**
 * 1 = Admin
 * 2 = Manager
 * 3 = Customer
 * 4 = qwerty
 */