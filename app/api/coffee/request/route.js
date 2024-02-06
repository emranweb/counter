import { connection } from "@/app/database/dbconnect";
import { revalidatePath } from "next/cache";

export async function GET(request, response) {
    const [results] = await connection.query("SELECT * FROM request_coffee");
}

export async function POST(request, response) {
    const { user_id, delivery_time } = await request.json();

    const [results] = await connection.query(
        "INSERT INTO request_coffees (user_id, delivery_time) VALUES (?, ?)",
        [user_id, delivery_time]
    );
    revalidatePath("/", "page");
    return Response.json(results);
}
