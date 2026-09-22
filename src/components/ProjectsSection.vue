<template>
  <section id="projects">
    <div class="container">
      <h2>PROJECTS</h2>

      <div class="card-grid">
        <div v-for="project in projects" :key="project.title" class="card">
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
    href: 'YOUR-HRFLOW-LINK',
  },
  {
    title: 'Pawtopia',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub'],
    description:
      'A pet care booking website built for a Startup Launch Challenge. I served as project manager and developer, setting up the GitHub repository and branch structure, coordinating the team, and maintaining design consistency across the project.',
    href: 'YOUR-PAWTOPIA-LINK',
  },
]
</script>
