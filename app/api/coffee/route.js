import { connection } from "@/app/database/dbconnect";

export async function GET() {
    const [results] = await connection.query(
        `SELECT * FROM coffees ORDER BY coffee_id DESC`
    );

    return Response.json(results);
}

export async function POST(request) {
    const { count } = await request.json();

    const [results] = await connection.query(
        `INSERT INTO coffees (user_id, count) VALUES(?, ?)`,
        [1, count ?? 1]
    );

    return Response.json({ message: "Coffee created!", results });
}
