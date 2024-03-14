import { connection } from "@/app/database/dbconnect";
import bcrypt from "bcrypt";

const generatePasword = (password: string) => {
    const data = process.env.NEXT_BSCRYPT_SALT;
    const salt = bcrypt.genSaltSync(Number(data));
    return bcrypt.hashSync(password, salt);
};

export async function POST(req: Request, res: Response) {
    const data = await req.json();
    const hashPassword = generatePasword(data.password);
    if (data) {
        const [results] = await connection.query(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [data.fullName, data.email, hashPassword]
        );
        return Response.json(results);
    } else {
        return Response.json({ message: "No data" });
    }
}
