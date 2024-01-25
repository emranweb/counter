import { connection } from "@/app/database/dbconnect";

export async function GET(request: Request, response: Response) {
    const [rows] = await connection.query("SELECT * FROM users");
    return Response.json(rows);
}

export async function POST(request: Request, response: Response) {
    const data = await request.body;
    const [rows] = await connection.query(
        "INSERT INTO users SET ?",
        request.body
    );
}
