<!-- pages/signup.vue -->
<template>
  <form method="post" action="/api/signup">
    <input id="email" name="email" placeholder="Email" type="email" />
    <input
      id="password"
      name="password"
      placeholder="Password"
      type="password"
    />
    <button type="submit">Sign up</button>
  </form>

  <!-- pages/signup.vue -->

  <!-- ... existing sign up form -->

  <form action="/api/oauth" method="post">
    <input type="hidden" name="provider" value="github" />
    <button type="submit">Sign up with GitHub</button>
  </form>

</template>