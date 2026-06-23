<script setup>
const user = JSON.parse(localStorage.getItem('user'))
</script>

<template>
    <h1>Profile</h1>
    <v-avatar image="logo.png" size="49"></v-avatar>
    <p>Name: {{ user.firstname }} {{ user.lastname }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Phone: {{ user.phone }}</p>
    <p>Location: {{ user.location }}</p>
    <p>Address: {{ user.address }}</p>
</template>
