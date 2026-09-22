<template>
  <nav>
    <div class="nav-container">
      <a href="#hero" class="nav-logo" @click="closeMenu">AA.</a>

      <button
        class="menu-toggle"
        aria-label="Toggle navigation"
        :aria-expanded="menuOpen"
        @click="toggleMenu"
      >
        <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>

      <ul class="nav-links" :class="{ active: menuOpen }">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" @click="closeMenu">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const links = [
  { href: '#about', label: 'About Me' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>
