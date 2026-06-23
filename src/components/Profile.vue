<script setup>
const user = JSON.parse(localStorage.getItem('user'))
</script>

<template>
    <h1>Profile</h1>
    <p>Name: {{ user.firstname }} {{ user.lastname }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Phone: {{ user.phone }}</p>
    <p>Location: {{ user.location }}</p>
    <p>Address: {{ user.address }}</p>
</template>
