import { connection } from "@/app/database/dbconnect";
import { ResultSetHeader } from "mysql2";

export async function POST(req: Request, res: Response) {
    const data = await req.json();
    const [results] = await connection.query<ResultSetHeader>(
        "INSERT INTO coffees (user_id, request_id) VALUES (?, ?)",
        [data.user_id, data.request_id]
    );

    if (results.serverStatus === 2) {
        const [results] = await connection.query<ResultSetHeader>(
            "UPDATE request_coffees SET status = 'completed' WHERE request_id = ?",
            [data.request_id]
        );
    }

    return Response.json(results);
}
