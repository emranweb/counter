import { connection } from "@/app/database/dbconnect";

export async function GET() {
    return Response.json({ message: "Hello World!" });
}

export async function POST(request: Request) {
    const { count } = await request.json();

    console.log(request.body);
    const [rows] = await connection.query(
        `INSERT INTO coffees(user_id, count) VALUES(${count})`
    );

    return Response.json({ message: "Coffee created!" });
}
