export interface StudentPayload {
    sub: number;
    nome: string;
    email: string;
    matricula: string;
    iat?: number;
    exp?: number;
}