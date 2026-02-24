import { DatabaseError } from "pg";
import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  response.status(200).json({ chave: "teste response status" });
}

export default status;
