import { connection } from "@/app/database/dbconnect.js";

export async function GET() {
    const [results] = await connection.query(
        "SELECT SUM(count) AS today FROM coffees WHERE DATE(datetime) = CURDATE();"
    );
    return Response.json(results);
}
