<script setup></script>

<template>
    <div class="container-fluid p-0">
        <div class="row navigation pt-3 pb-3">
            <div class="col-12 col-md-6">
                <NuxtLink to="/">
                    <img src="@/assets/logo.webp" class="logo" alt="logo" />
                </NuxtLink>
            </div>
            <div class="col-12 col-md-6 d-flex align-items-center justify-content-end">
                <a href="tel:01173256595" class="float-phone d-flex">
                    <Icon name="ph:phone-call" class="fa-phone " />
                    <div class="phone-text ps-3">
                        Call 24/7 Emergency Service
                        <span class="phone-number">01173256595</span>
                    </div>
                </a>
            </div>
        </div>
        <div class="row hero pt-5">
            <div class="row">
                <div class="col-12 col-md-8 p-5 ps-8">
                    <h1>FAST 20 MINUTE LOCKSMITHS, CALL 24/7</h1>
                    <h2 class="pt-3">Fast Emergency Locksmiths Near You. Call Now</h2>
                    <button class="call-now mt-5 p-2 mb-5">
                        CALL NOW <br> 01173256595
                    </button>
                </div>
            </div>
            <div class="row services pt-4 pb-3">
                <div class="col-12 col-md-3 d-flex justify-content-center align-items-center">
                    <Icon name="mdi:truck-fast-outline" class="truck-icon" />
                    <div class="service-text">
                        <h3>Fast response</h3>
                        <p>We arrive in 20 minutes</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 d-flex justify-content-center align-items-center">
                    <Icon name="material-symbols-light:editor-choice-outline-rounded" class="best-choice-icon" />
                    <div class="service-text">
                        <h3>Best Choice Guarantee</h3>
                        <p>CRB/DBS Checked</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 d-flex justify-content-center align-items-center">
                    <Icon name="hugeicons:location-05" class="location-icon" />
                    <div class="service-text">
                        <h3>No Call Out Fee</h3>
                        <p>No Charge To Come</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 d-flex justify-content-center align-items-center">
                    <Icon name="arcticons:bestprice" class="best-price-icon" />
                    <div class="service-text">
                        <h3>Best Prices</h3>
                        <p>Affordable Rates</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row services-cards pt-3">
            <div class="col-3 card-background">
                <div class="card-1">
                    <h4>Emergency locksmith</h4>
                </div>
            </div>
            <div class="col-3 card-background">
                <div class="card-2">
                    <h4>Lock change</h4>
                </div>
            </div>
            <div class="col-3 card-background">
                <div class="card-3">
                    <h4>Burglary Repair</h4>
                </div>
            </div>
            <div class="col-3 card-background">
                <div class="card-4">
                    <h4>Residential / Comercial</h4>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="row information mb-5">
        <div class="col-12 col-md-8">
            <h5 class="pt-3 pb-3">Cheap locksmith near me available 24/7</h5>
            <p class="pt-3 pb-3">We provide the best quality locksmith services with multiple teams located near you, our services include business locksmith services, emergency locksmith services, 24-hour locksmith services, with us you’ll receive trusted locksmith services in the most urgent of manner.</p>
            <ul class="p-0">
                <li>100% Satisfaction Guarantee</li>
                <li>Local Locksmiths</li>
                <li>Mobile service, we come to you</li>
                <li>Licensed & insured professionals.</li>
                <li>24/7 availability, for your peace of mind</li>
                <li>Fast & efficient</li>
                <li>Trustworthy</li>
                <li>Reliable & Secure</li>
                <li>Quick & Convenient</li>
                <li>Local expertise</li>
                <li>Satisfaction guarantee</li>
                <li class="pb-2">Expert security consultationse</li>
            </ul>
            <button class="call-now p-2">
                CALL NOW 01173256595
            </button>
        </div>
    </div>
    <InfoSection />
    <TrustedSection />
    <TestimonialsSection />
    <div class="row footer">
        <div class="col-12 col-md-6">
            <NuxtLink to="/">
                <img src="@/assets/logo.webp" class="logo" alt="logo" />
            </NuxtLink>
            <button class="call-now p-2">
                CALL NOW 01173256595
            </button>
            <p>© 2024 Locksmith 4 All. All Rights Reserved.</p>
        </div>
        <div class="col-12 col-md-6">
            <NuxtImg src="/images/badges/247-service-badge.webp" class="service-badge" alt="badge1"/>
            <h6>BUSINESS HOURS</h6>
            <p>Our support available to help you 24 hours a day, seven days a week.</p>
            <ul>
                <li>OPEN 24h</li>
                <li>7 DAYS a WEEK</li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
.navigation {
  padding: 0;
  margin: 0;
  background: #000;

  .float-phone {
    text-decoration: none;
    color: #b30000;
    float: right;
  }

  .phone-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.3rem;
    color: #fff;
    font-weight: 600;
  }

  .phone-number {
    font-size: 2rem;
    color: #b30000;
  }
}

.fa-phone {
    width: 70px;
    height: 70px;
    background: #000;
    border-radius: 50px;
    padding: 12px;
    border: 2px solid #b30000;
}

.hero {
    background-image: url("@/assets/images/hero-background.webp");
    background-size: cover;
    background-repeat: no-repeat;

    h1, h2 {
        color: #fff;
    }

    .call-now {
        color: #fff;
        background-color: #b30000;
        width: 150px;
        border-radius: 15px;
    }

    .services {
        background-color: rgba(179,0,0, 0.5);

        .truck-icon, .best-choice-icon, .location-icon, .best-price-icon {
            width: 70px;
            height: 70px;
            color: #fff;
            padding-right: 10px;
        }
        .service-text {
            color: #fff;
            h3 {
                font-size: 1rem;
            }
            p {
                font-size: 0.8rem;
            }
        }
    }
}

.services-cards {
    position: relative;
    display: flex;
    justify-content: center;

    .card-background {
        background-color: #ECECEC;
        width: 212px;
        height: 200px;
        padding: 0;
        border-right: 10px solid #fff;
        margin-right: 30px;
    }
    h4 {
        background-color: #b30000;
        color: #fff;
        font-size: 0.9rem;
        position: absolute;
        bottom: 10px;
        margin: 0;
        width: 200px;
        text-align: center;
        padding: 10px;
    }
    .card-1 {
        background-image: url('@/assets/images/services/service1.webp');
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 50%;
        width: 200px;
        height: 200px;
    }
    .card-2 {
        background-image: url('@/assets/images/services/service2.webp');
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 50%;
        width: 200px;
        height: 200px;
    }
    .card-3 {
        background-image: url('@/assets/images/services/service3.webp');
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 50%;
        width: 200px;
        height: 200px;
    }
    .card-4 {
        background-image: url('@/assets/images/services/service4.webp');
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 50%;
        width: 200px;
        height: 200px;
    }
}
.information {
    color: gray;
    justify-content: center;

    h5 {
        color: #000;
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
    }
    p {
        text-align: center;
    }
    ul {
        list-style: none;
    }
    ul li:before {
        content: '✓';
        color: #b30000;
        padding-right: 10px;
    }
    .call-now {
        color: #fff;
        background-color: #b30000;
        width: 300px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }
}
.footer {
    background-color: rgba(179,0,0, 0.8);
    padding: 2rem;

    p, li {
        color: #fff;
    }
    h6 {
        color: #fff;
        font-weight: 600;
    }
    .call-now {
        color: #fff;
        background-color: #b30000;
        width: 300px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .service-badge {
        width: 150px;
        padding-top: 15px;
        padding-bottom: 15px;
    }
}

@media only screen and (max-width: 600px) {
    .logo {
        width: 80%;
    }
}
</style>