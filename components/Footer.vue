<template>
  <footer class="site-footer">
    <Newsletter :heading="globals.footer.newsletterHeading" />
    <scroll-link href="#hero" class="to-top">
      <div class="icon">
        <img src="/images/rocket.png" alt="Rocket emoji" />
      </div>
      To top
    </scroll-link>
    <nav class="footer-nav">
      <a href="/cookies/">Cookies</a>
      <a href="https://jakobsenfrukt.no" target="_blank" class="credit">Website by JF&amp;G 🍍</a>
    </nav>
  </footer>
</template>

<script>
import gql from 'graphql-tag'
import ScrollLink from '~/components/ScrollLink.vue'
import Newsletter from '~/components/Newsletter.vue'

export default {
  components: {
    ScrollLink,
    Newsletter
  },
  apollo: {
    globals: gql`
    query {
      globals {
        footer {
          newsletterHeading
        }
      }
    }`
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.site-footer {
  background: black;
  width: 100%;
  margin-top: 10rem;
  padding: 3rem 1rem 1rem;
  position: relative;
  z-index: 1001;
}
.to-top {
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 5rem auto;

  .icon {
    display: block;
    width: 3rem;
    margin: 0 auto;
  }
}
.footer-nav {
  display: flex;

  a {
    display: inline-block;
    margin: 0 1rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    font-style: italic;
    letter-spacing: 0.05em;

    &.credit {
      margin-left: auto;
    }

    @media (max-width: $media-s) {
      font-size: 10px;
    }
  }
}
</style>
