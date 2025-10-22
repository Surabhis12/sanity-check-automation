import { getUsers } from "./userService.js";

(async () => {
  const users = await getUsers();
  console.log("Fetched users:", users.length);
})();
