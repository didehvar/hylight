<template>
  <div>
    <form id="email" @submit.prevent="onSubmit" v-if="!done">
      <p class="mb-3">
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          class="shadow appearance-none border rounded py-2 px-4 w-full sm:w-5/6 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          required
        >
      </p>

      <p>
        <input
          class="bg-purple hover:bg-purple-dark text-white py-3 px-4 rounded focus:outline-none focus:shadow-outline font-thin"
          type="submit"
          value="Notify me when Hylight is ready"
        >
      </p>

      <div class="mt-3" v-if="errors.length">
        <b>Please address the following error(s):</b>
        <ul class="mt-2">
          <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
        </ul>
      </div>
    </form>

    <p v-else>Thank you, we'll be in touch.</p>
    <p></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data: function() {
    return {
      errors: [],
      done: false,
      email: null
    }
  },
  methods: {
    onSubmit: function() {
      firebase
        .database()
        .ref()
        .child('emails')
        .push(
          {
            email: this.email,
            timestamp: Date.now()
          },
          () => {
            this.done = true
          }
        )
    }
  }
}
</script>

<style>
</style>
