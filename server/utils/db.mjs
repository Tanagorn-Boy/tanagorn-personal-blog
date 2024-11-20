import * as pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg.default;

const connectionPool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});

{
  /* 
// ฟังก์ชันทดสอบการเชื่อมต่อ
async function testConnection() {
  try {
    const client = await connectionPool.connect();
    console.log("Database connected successfully!");
    client.release(); // ปิด connection หลังจากทดสอบเสร็จ
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
}

testConnection(); // เรียกฟังก์ชันทดสอบ
*/
}
export default connectionPool;
