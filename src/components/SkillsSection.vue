<template>
  <section id="skills" v-reveal>
    <div class="container">
      <h2>SKILLS</h2>

      <div class="skill-groups">
        <div v-for="group in skillGroups" :key="group.title" class="skill-group">
          <h3>{{ group.title }}</h3>

          <div class="skill-tags">
            <span v-for="skill in group.skills" :key="skill.name" class="tag">
              <i :class="skill.icon"></i>
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: 'devicon-html5-plain' },
      { name: 'CSS', icon: 'devicon-css3-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'Express.js', icon: 'devicon-express-original' },
      { name: 'PHP', icon: 'devicon-php-plain' },
      { name: 'MySQL', icon: 'devicon-mysql-plain' },
      { name: 'Python', icon: 'devicon-python-plain' },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'REST APIs', icon: 'fa-solid fa-code' },
    ],
  },
]
</script>
