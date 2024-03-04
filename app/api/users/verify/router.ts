import { connection } from "@/app/database/dbconnect";

export async function POST(request: Request, response: Response) {
    const data = await request.body;
    console.log(data);
    const [results] = await connection.query(
        "SELECT * FROM users WHERE email = ? AND pasword= ?",
        ["test@gmail.com", "122"]
    );
    return Response.json(results);
}
