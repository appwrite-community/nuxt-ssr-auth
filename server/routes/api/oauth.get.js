// server/routes/api/oauth.get.js
import { SESSION_COOKIE, createAdminClient } from "~/server/lib/appwrite";

export default defineEventHandler(async (event) => {
  // Extract the userId and secret from the URL query parameters
  const { userId, secret } = getQuery(event);
  if (!userId || !secret) {
    return sendRedirect(event, "/signup");
  }

  // Create the Appwrite client
  const { account } = createAdminClient();

  // Exchange the token userId and secret for a session
  const session = await account.createSession(userId, secret);

  // Set the session cookie
  setCookie(event, SESSION_COOKIE, session.secret, {
    expires: new Date(session.expire),
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  // Redirect the user to the account page
  await sendRedirect(event, "/account");
});
