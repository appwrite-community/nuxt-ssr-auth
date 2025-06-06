export default defineEventHandler(async (event) => {
  if (event.context.user) {
    await sendRedirect(event, "/account");
  }

  await sendRedirect(event, "/signup");
});
