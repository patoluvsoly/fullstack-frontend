<script setup>

</script>

<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel cycle height="500" hide-delimiters show-arrows-on-hover>
                    <v-carousel-item src="/carousel-1.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel-2.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel-3.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel-4.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel-5.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel-6.jpg" cover></v-carousel-item>
                </v-carousel>
                
            </v-col>
        </v-row>
    </v-container>

    <!-- ABOUT US --> 
     <v-container style="background-color: #FF8C00; max-width: 100%; padding-top: 50px; padding-bottom: 50px;">
        <v-row>
            <v-col class="text-center">
                <div class="text-display-medium mb-12 text-white text-center text-decoration-underline"> WELCOME TO BOOKVAULT</div>  
                <div class="title-text-large font-weight-light text-medium-emphasis mb-8 text-white">BookVault is your trusted online destination for discovering, purchasing, and enjoying books from every genre and category. Whether you're a passionate reader, a student seeking academic resources, or a professional looking to expand your knowledge, our carefully curated collection is designed to help you find the perfect book. We believe that great stories and valuable knowledge should be accessible to everyone, which is why we strive to provide a seamless, affordable, and enjoyable online shopping experience.</div>
                <div class="title-text-large font-weight-light text-medium-emphasis mb-8 text-white">At BookVault, we're more than just a bookstore—we're a community built around the love of reading and lifelong learning. Our mission is to connect readers with inspiring authors, timeless classics, and the latest bestsellers while offering exceptional customer service every step of the way. As we continue to grow, we remain committed to making books easier to discover, easier to access, and a source of inspiration for readers around the world.</div>              
            </v-col>
        </v-row>
     </v-container>
    <!-- BEST SELLERS -->
     <v-container max-width="100%">
        <v-row>
            <v-col md="3">
                <v-card>
                    <v-img src="/best-seller-1.jpg" cover></v-img>                    
                    <v-card-title>HOW INNOVATION WORKS</v-card-title>
                    <v-card-subtitle>KSH 1,500</v-card-subtitle>
                    <v-btn to="/cart" color="primary">ADD TO CART</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-img src="/best-seller-2.jpg" cover></v-img>                    
                    <v-card-title>PSYCHOLOGY OF MONEY</v-card-title>
                    <v-card-subtitle>KSH 1,200</v-card-subtitle>
                    <v-btn to="/cart" color="primary">ADD TO CART</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-img src="/best-seller-7.png" cover></v-img>                    
                    <v-card-title>PSYCHOLOGY OF MONEY VERSION 2</v-card-title>
                    <v-card-subtitle>KSH 1,000</v-card-subtitle>
                    <v-btn to="/cart" color="primary">ADD TO CART</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-img src="/best-seller-6.png" cover></v-img>                    
                    <v-card-title>THE POWER OF HABITS</v-card-title>
                    <v-card-subtitle>KSH 1,500</v-card-subtitle>
                    <v-btn to="/cart" color="primary">ADD TO CART</v-btn>
                </v-card>
            </v-col>
        </v-row>
     </v-container>

     <!-- FOOTER -->
      <v-container class=bg-orange max-width="100%" style="padding-top: 50px; padding-bottom: 50px;">
        <v-row>
            <v-col md="4">
                <v-card>
                    <v-card-title class="text-center">Connect with us</v-card-title> 
                    <div class="d-flex justify-center" style="margin-bottom: 20px;">
                        
                        <v-btn icon href="https://www.facebook.com/BookVault" target="_blank">
                            <v-icon>mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn icon href="https://twitter.com/BookVault" target="_blank">
                            <v-icon>mdi-twitter</v-icon>
                        </v-btn>
                        <v-btn icon href="https://www.instagram.com/BookVault" target="_blank">
                            <v-icon>mdi-instagram</v-icon>
                        </v-btn>
                    </div>                           
                </v-card>
            </v-col>

            <v-col md="4">
                <v-card>
                    <v-card-title class="text-center">Contact Us</v-card-title>
                    <div class="text-center" style="margin-bottom: 20px;">                        
                        <p>Phone: +254 700 000 000</p>
                    </div>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card>
                    <v-card-title class="text-center">Email Us</v-card-title>
                    <div class="text-center" style="margin-bottom: 20px;">                        
                        <p>Email: info@bookvault.com</p>
                    </div>
                </v-card>
            </v-col>
        </v-row>
      </v-container>

</template>
