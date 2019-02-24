<template>
  <div
    class="container h-full mx-auto px-8 md:ml-32 lg:mx-auto flex justify-center flex-col text-white"
  >
    <div class="md:w-1/2">
      <h1 class="text-5xl">hylight</h1>
      <h2 class="text-xl my-12">
        Hylight manages the creation of YouTube highlights from your Twitch videos.
        We'll find your best clips, compile them and upload them to your channel,
        enabling you to focus on what matters most.
      </h2>

      <email-form/>
    </div>
  </div>
</template>

<script>
import EmailForm from '~/components/EmailForm.vue'

export default {
  components: {
    EmailForm
  }
}
</script>

<style>
html {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(~assets/images/background.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#__nuxt,
#__layout {
  height: 100%;
}
</style>
