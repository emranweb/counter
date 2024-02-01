import { connection } from "@/app/database/dbconnect.js";

interface Today {
    today: string;
}

export async function GET(request: Request, response: Response) {
    const [results] = await connection.query(
        "SELECT SUM(count) AS today FROM coffees WHERE DATE(datetime) = CURDATE();"
    );
    return Response.json(results);
}
