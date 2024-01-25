import { connection } from "@/app/database/dbconnect";

export async function GET(request: Request, response: Response) {
    const [results] = await connection.query("SELECT * FROM request_coffee");
}

export async function POST(request: Request, response: Response) {
    const { user_id, delivery_time } = await request.json();

    const [results] = await connection.query(
        "INSERT INTO request_coffees (user_id, delivery_time) VALUES (?, ?)",
        [user_id, delivery_time]
    );
    return Response.json(results);
}
