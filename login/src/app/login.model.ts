export class User {
    id?: number;
    username!: string;
    password!: string;

}

export class JwtToken {
    id_token: string;
    access_token: string;
    refresh_token: string;
    expires_in: string;
};