import { connection } from "@/app/database/dbconnect";

export async function GET(request: Request, response: Response) {
    const [results] = await connection.query(
        "SELECT SUM(count) as month FROM coffees WHERE MONTH(datetime) = MONTH(CURRENT_DATE()) AND YEAR(datetime) = YEAR(CURRENT_DATE())"
    );

    return Response.json(results);
}
