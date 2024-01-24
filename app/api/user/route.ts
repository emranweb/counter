import { connection } from "@/app/database/dbconnect";

export async function GET() {
    const [rows] = await connection.query("SELECT * FROM users");
    return Response.json(rows);
}
