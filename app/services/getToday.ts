import { connection } from "@/app/database/dbconnect";
import { RowDataPacket } from "mysql2";

// code to get today vaue
export const getTodayValue = async () => {
    const [results] = await connection.query<RowDataPacket[]>( // Update the type annotation of connection
        "SELECT SUM(count) AS today FROM coffees WHERE DATE(datetime) = CURDATE();"
    );
    return results;
};
