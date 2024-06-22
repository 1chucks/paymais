import { db } from ".";
import { authTokenSchema, jobDetailsSchema, usersSchema } from "./schema";

const main = async () => {
	try {
		console.log("Seeding database");
		// Delete all data
		await db.delete(authTokenSchema);
		await db.delete(jobDetailsSchema);
		await db.delete(usersSchema);

		// await db
		//   .insert(usersSchema)
		//   .values([{ phone: "234810893883", password: "", bvn: "" }])
	} catch (error) {
		console.error(error);
		throw new Error("Failed to seed database");
	}
};

main();
