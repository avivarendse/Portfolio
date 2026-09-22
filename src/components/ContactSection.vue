<template>
  <section id="contact">
    <div class="container contact-container">
      <div class="contact-text">
        <h2>Contact Me</h2>
        <p>
          I'm currently open to junior developer roles and internships in Cape Town.
          Feel free to reach out.
        </p>
      </div>

      <div class="contact-form">
        <form action="https://formspree.io/f/meewzvqv" method="post" @submit="onSubmit">
          <label for="name">Name</label>
          <input id="name" v-model="form.name" type="text" name="name">
          <p v-if="errors.name" class="form-error">{{ errors.name }}</p>

          <label for="email">Email</label>
          <input id="email" v-model="form.email" type="email" name="email">
          <p v-if="errors.email" class="form-error">{{ errors.email }}</p>

          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" name="message"></textarea>
          <p v-if="errors.message" class="form-error">{{ errors.message }}</p>

          <button class="btn-submit" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function onSubmit(event) {
  errors.name = ''
  errors.email = ''
  errors.message = ''

  let isValid = true

  if (form.name.trim() === '') {
    errors.name = 'Please enter your name.'
    isValid = false
  }

  if (form.email.trim() === '') {
    errors.email = 'Please enter your email address.'
    isValid = false
  } else if (!isValidEmail(form.email.trim())) {
    errors.email = 'Please enter a valid email address.'
    isValid = false
  }

  if (form.message.trim() === '') {
    errors.message = 'Please enter a message.'
    isValid = false
  }

  if (!isValid) {
    event.preventDefault()
  }
}
</script>
