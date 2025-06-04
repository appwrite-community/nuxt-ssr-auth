<!-- pages/account.vue -->
<script setup>
// Fetch user data from your API endpoint
const { data: user } = await useFetch('/api/user')

console.log('User data:', user.value)

if (user.value === false) {
  await navigateTo('/signup')
}
</script>

<template>
  <div v-if="user">
    <ul>
      <li>
        <strong>Email:</strong> {{ user.email }}
      </li>
      <li>
        <strong>Name:</strong> {{ user.name }}
      </li>
      <li>
        <strong>ID: </strong> {{ user.$id }}
      </li>
    </ul>
    <form method="post" action="/api/signout">
      <button type="submit">Log out</button>
    </form>
  </div>
</template>
