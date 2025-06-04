// server/routes/api/oauth.post.js
import { createAdminClient } from "~/server/lib/appwrite";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { account } = createAdminClient();

  const redirectUrl = await account.createOAuth2Token(
    "github", // OAuth provider
    `${config.public.appwriteEndpoint}/api/oauth`, // Success URL: redirect back to the /oauth route
    `${config.public.appwriteEndpoint}/signup`      // Failure URL: redirect to the sign up page
  );

  // Redirect the user to the OAuth provider authorization page
  await sendRedirect(event, redirectUrl);
});
