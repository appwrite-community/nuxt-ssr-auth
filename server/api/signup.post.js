// server/api/signup.post.js
import { ID } from "node-appwrite";
import { SESSION_COOKIE, createAdminClient } from "~/server/lib/appwrite";

export default defineEventHandler(async (event) => {
  // Extract the form data
  const formData = await readFormData(event);
  const email = formData.get("email");
  const password = formData.get("password");

  // Create the Appwrite client.
  const { account } = createAdminClient(event);

  // Create a new user with email and password
  //await account.create(ID.unique(), email, password);

  // Create the session using the client
  const session = await account.createEmailPasswordSession(email, password);

  // Set the session cookie with the secret
  setCookie(event, SESSION_COOKIE, session.secret, {
    expires: new Date(session.expire),
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  // Redirect to the account page.
  await sendRedirect(event, "/account");
});
