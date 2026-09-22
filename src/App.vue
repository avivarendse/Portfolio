<template>
  <header>
    <TheNavbar />
    <HeroSection />
  </header>

  <main>
    <AboutSection />
    <hr>
    <SkillsSection />
    <hr>
    <ProjectsSection />
    <hr>
    <EducationSection />
    <hr>
    <ContactSection />
  </main>

  <TheFooter />
</template>

<script setup>
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>
