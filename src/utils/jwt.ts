import jwt from 'jsonwebtoken';

export const generateToken = async (payload: any): Promise<string> => {
    return jwt.sign(payload, 'secretKey', {
        expiresIn: '12h',
    });
}

export const validateToken = async (token: string) => {
    const decoded = jwt.verify(token, 'secretKey');
    return decoded;
}