import { connection } from "@/app/database/dbconnect.js";

export async function GET() {
    const [rows, fields] = await connection.query(
        "SELECT SUM(count) FROM coffees WHERE DATE(datetime) = CURDATE();"
    );
    return Response.json(rows);
}
