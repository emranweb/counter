import { connection } from "@/app/database/dbconnect";

export async function GET(request: Request, response: Response) {
    const [results] = await connection.query(
        "SELECT SUM(count) FROM coffees WHERE MONTH(datetime) = MONTH(CURRENT_DATE() - INTERVAL 1 MONTH);"
    );

    return Response.json(results);
}
