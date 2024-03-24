import { connection } from "@/app/database/dbconnect";

export async function POST(req: Request, res: Response) {
    const data = await req.json();

    const [results] = await connection.query(
        "SELECT Count(*) as custom FROM coffees WHERE datetime BETWEEN ? AND ?",
        [data.converDateOne, data.converDateTwo]
    );

    return Response.json(results);
}
