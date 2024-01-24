import { connection } from "@/app/utils/dbconnect";

export async function GET() {
    console.log("hi");
    const [rows] = await connection.query("SELECT * FROM users");
    return Response.json(rows);
}
