import { connection } from "../../../utils/dbconnect.js";

export async function GET() {
    const [rows, fields] = await connection.query(
        "SELECT count FROM coffee WHERE date = CURDATE()"
    );
    return Response.json(rows);
}
