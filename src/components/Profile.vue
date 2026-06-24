<script setup>
const user = JSON.parse(localStorage.getItem('user'))
</script>

<template>
    <v-container max-width="800" class="py-12">
        <!-- Header -->
        <v-row class="mb-8">
            <v-col md="12" class="text-center">
                <div class="text-display-medium font-weight-bold text-primary">My Profile</div>
                <div class="text-subtitle-1 text-medium-emphasis">Manage your account information</div>
            </v-col>
        </v-row>

        <!-- Profile Card -->
        <v-row>
            <v-col md="12">
                <v-card elevation="4" class="profile-card">
                    <!-- Avatar Section -->
                    <div class="avatar-section text-center py-8">
                        <v-avatar image="logo.png" size="120" class="avatar-large"></v-avatar>
                        <div class="text-h5 font-weight-bold text-white mt-4">{{ user.firstname }} {{ user.lastname }}</div>
                    </div>

                    <v-card-item class="py-8">
                        <!-- Information Grid -->
                        <v-row class="mt-4">
                            <!-- Email -->
                            <v-col md="6" sm="12" class="mb-6">
                                <div class="info-item">
                                    <v-icon size="24" color="primary" class="mb-2">mdi-email</v-icon>
                                    <div class="text-caption text-medium-emphasis">Email Address</div>
                                    <div class="text-body-1 font-weight-500">{{ user.email }}</div>
                                </div>
                            </v-col>

                            <!-- Phone -->
                            <v-col md="6" sm="12" class="mb-6">
                                <div class="info-item">
                                    <v-icon size="24" color="primary" class="mb-2">mdi-phone</v-icon>
                                    <div class="text-caption text-medium-emphasis">Phone Number</div>
                                    <div class="text-body-1 font-weight-500">{{ user.phone }}</div>
                                </div>
                            </v-col>

                            <!-- Location -->
                            <v-col md="6" sm="12" class="mb-6">
                                <div class="info-item">
                                    <v-icon size="24" color="primary" class="mb-2">mdi-map-marker</v-icon>
                                    <div class="text-caption text-medium-emphasis">Location</div>
                                    <div class="text-body-1 font-weight-500">{{ user.location }}</div>
                                </div>
                            </v-col>

                            <!-- Address -->
                            <v-col md="6" sm="12" class="mb-6">
                                <div class="info-item">
                                    <v-icon size="24" color="primary" class="mb-2">mdi-home</v-icon>
                                    <div class="text-caption text-medium-emphasis">Address</div>
                                    <div class="text-body-1 font-weight-500">{{ user.address }}</div>
                                </div>
                            </v-col>
                        </v-row>

                        <v-divider class="my-8"></v-divider>

                        <!-- Action Buttons -->
                        <v-row class="mt-6">
                            <v-col md="6" sm="12">
                                <v-btn variant="outlined" color="primary" class="w-100" prepend-icon="mdi-pencil">
                                    Edit Profile
                                </v-btn>
                            </v-col>
                            <v-col md="6" sm="12">
                                <v-btn variant="outlined" color="error" class="w-100" prepend-icon="mdi-logout">
                                    Sign Out
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.profile-card {
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.profile-card:hover {
    box-shadow: 0 12px 28px orangered !important;
}

.avatar-section {
    border-radius: 16px 16px 0 0;
    box-shadow: inset 0 2px 8px orangered;
    background: orangered;
}

.avatar-large {
    border: 4px solid white;
    box-shadow: 0 4px 12px orangered
}

.info-item {
    padding: 16px;
    border-radius: 12px;
    background: #f5f5f5;
    transition: all 0.3s ease;
}

.info-item:hover {
    background: orangered;
    transform: translateY(-2px);
}
</style>
