import { connection } from "@/app/database/dbconnect";

export async function POST(req: Request, res: Response) {
    const data = await req.json();
    if (data) {
        const [results] = await connection.query(
            "INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)",
            [data.fullName, data.email, data.password]
        );
        return Response.json(results);
    } else {
        return Response.json({ message: "No data" });
    }
}
