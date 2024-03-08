<script setup></script>

<template>
  <div class="hero">
    <div class="container">
      <div class="row d-flex flex-column-reverse flex-lg-row">
        <div class="col-12 col-lg-6 d-flex hero-man"></div>
        <div class="col-12 col-lg-6 d-flex align-self-center flex-column mt-md-0 pb-3">
          <h1 class="text-white text-start"><span class="my-yellow">Local Locksmith</span> near me</h1>
          <ul class="with-border bg-black">
            <li class="text-white text-start pl-2 pt-2">Service on spot within 25 minutes</li>
            <li class="text-white text-start pl-2">Local service from £39</li>
            <li class="text-white text-start pl-2">Locks from £25</li>
            <li class="text-white text-start pl-2">24/7 Local Emergency</li>
            <li class="text-white text-start pl-2">Fully equipped locksmiths</li>
            <li class="text-white text-start pl-2">No Call Out Charge</li>
            <li class="text-white text-start pl-2">1 Year Warranty</li>
            <div class="d-md-none d-sm-block">
              <ul class="p-0">
                <li class="text-white text-start pl-2">100% Satisfaction Guarantee</li>
                <li class="text-white text-start pl-2">Local Locksmiths</li>
                <li class="text-white text-start pl-2">Mobile service, we come to you</li>
                <li class="text-white text-start pl-2">Licensed & insured professionals.</li>
                <li class="text-white text-start pl-2">24/7 availability, for your peace of mind</li>
                <li class="text-white text-start pl-2">Fast & efficient</li>
                <li class="text-white text-start pl-2">Trustworthy</li>
                <li class="text-white text-start pl-2">Reliable & Secure</li>
                <li class="text-white text-start pl-2">Quick & Convenient</li>
                <li class="text-white text-start pl-2">Local expertise</li>
                <li class="text-white text-start pl-2">Satisfaction guarantee</li>
                <li class="text-white text-start pl-2 pb-2">Expert security consultationse</li>
              </ul>
            </div>
            
          </ul>
          <button class="btn btn-primary w-100 my-primary-btn mt-1">
            <a class="text-white text-decoration-none" href="tel:01173256595">At your location within 25 minutes</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  background-image: url("@/assets/images/hero-background.webp");
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 500px;
  border-bottom: 10px solid #000000;

  @media (max-width: 700px) {
    max-height: 100%;
    background-image: none;
    background-color: #000000;
  }
  .hero-man {
    background-image: url("@/assets/images/header-man.webp");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 300px;
    @media (max-width: 700px) {
      border-top: 10px solid black;
    }
  }
  li {
    font-family: 'Ubuntu', sans-serif;
    list-style: disc;
  }
}
h1 {
  font-size: 2.5rem;
  &.with-border {
    border-left: 10px solid #B30000;
    padding-left: 25px;
    @media (max-width: 700px) {
      font-size: 3.5rem;
    }
  }
}
.btn-primary {
  background-color: #B30000 !important;
  border: none;
  &:focus, :active, :target, :visited {
    border: none;
    box-shadow: none;

  }
  a {
    text-align: center;
  }
}
</style>
