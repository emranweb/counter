import { connection } from "@/app/database/dbconnect";

export async function GET(req: Request, res: Response) {
    const data = await req.json();
    const [results] = await connection.query(
        "SELECT * FROM users WHERE email=?",
        [data.email]
    );
    return Response.json(results);
}
