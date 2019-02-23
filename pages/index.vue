<template>
  <div class="container h-full mx-auto px-8 md:ml-32 flex justify-center flex-col text-white">
    <div class="md:w-1/2">
      <h1 class="text-5xl">hylight</h1>
      <h2 class="text-xl my-12">
        Hylight manages the creation of YouTube highlight videos from your Twitch videos.
        We'll find your best clips, compile them and upload them to your channel,
        enabling you to focus on what matters most.
      </h2>

      <div class="mb-3">
        <input
          class="shadow appearance-none border rounded py-2 px-4 w-full sm:w-5/6 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Your email address"
        >
      </div>

      <button
        class="bg-purple hover:bg-purple-dark text-white py-3 px-4 rounded focus:outline-none focus:shadow-outline font-thin"
        type="button"
      >Notify me when Hylight is ready</button>
    </div>
  </div>
</template>
1
<script>
export default {
  components: {}
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
