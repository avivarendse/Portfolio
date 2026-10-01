<template>
  <section id="projects" v-reveal>
    <div class="container">
      <h2>PROJECTS</h2>

      <div class="card-grid">
        <div v-for="project in projects" :key="project.title" class="card" v-reveal>
          <h3>{{ project.title }}</h3>

          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>

          <p>{{ project.description }}</p>

          <a
            :href="project.href"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-submit"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'HRflow',
    tags: ['Vue.js', 'Bootstrap', 'Node.js', 'Express.js', 'MySQL'],
    description:
      'A full-stack HR management system built as a team project. I contributed to the frontend architecture and employee management functionality, with backend API integration using Node.js, Express.js, and MySQL.',
    href: 'https://avivarendse.github.io/HRflow/',
  },
  {
    title: 'ArtisanHub',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Vue.js', 'Node.js', 'Express.js', 'MySQL'],
    description:
      'A full-stack platform connecting customers with local artisans, making it easier to discover services, explore artisan profiles, and manage service requests. Built as a collaborative team project using Vue.js, Node.js, and MySQL.',
    href: 'https://group6-e-commerce-production.up.railway.app/',
  },
]
</script>
