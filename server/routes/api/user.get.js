// server/routes/api/user.get.js
export default defineEventHandler(async (event) => {
    const user = event.context.user;

    if (!user) {
        return false;
    }

    return user;
})