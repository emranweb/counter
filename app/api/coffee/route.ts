import { connection } from "@/app/database/dbconnect";

export async function GET() {
    return Response.json({ message: "Hello World!" });
}

export async function POST(request: Request) {
    const { count } = await request.json();

    const [results] = await connection.query(
        `INSERT INTO coffees (user_id, count) VALUES(?, ?)`,
        [1, count ?? 1]
    );

    return Response.json({ message: "Coffee created!", results });
}
