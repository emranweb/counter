import { connection } from "@/app/database/dbconnect";

export async function GET() {
    const [results] = await connection.query(
        "SELECT * FROM coffees ORDER BY coffee_id DESC"
    );

    return Response.json(results);
}
