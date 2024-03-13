import { connection } from "@/app/database/dbconnect";

export async function POST(request: Request, response: Response) {
    console.log("data");
    const data = await request.body;
    console.log(data);

    const [results] = await connection.query(
        "SELECT * FROM users WHERE email = ?",
        ["jane.doe@example.com"]
    );
    console.log(results);
    return Response.json(results);
}
