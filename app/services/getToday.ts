import { connection } from "@/app/database/dbconnect.js";

// code to get today vaue
export const getTodayValue = async () => {
    const [results] = await connection.query(
        "SELECT SUM(count) AS today FROM coffees WHERE DATE(datetime) = CURDATE();"
    );
    return results;
};
