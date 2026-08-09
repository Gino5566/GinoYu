<template>
  <section class="min-h-screen bg-zinc-950 text-zinc-200">
    <!-- Hero -->
    <div class="max-w-6xl mx-auto px-6 py-24 text-center">

      <h1
        class="text-5xl md:text-6xl font-black tracking-tight leading-tight"
      >
        <span class="text-cyan-400">{{ t('home.heroTitle1') }}</span> {{ t('home.heroTitle2') }}<br />
        {{ t('home.heroTitle3') }}
      </h1>

      <p
        class="mt-8 max-w-3xl mx-auto text-lg text-zinc-400"
      >
        <i18n-t keypath="home.heroDesc" tag="span">
          <template #ts>
            <span class="text-cyan-400 font-medium">TypeScript</span>
          </template>
          <template #vue>
            <span class="text-cyan-400 font-medium">Vue</span>
          </template>
        </i18n-t>
      </p>

      <div class="mt-12 flex justify-center gap-6">
        <router-link
          to="/projects"
          class="inline-flex items-center justify-center rounded-xl border border-cyan-400/60 px-8 py-3 text-cyan-400
                 hover:bg-cyan-400 hover:text-black transition"
        >
          {{ t('home.projects') }}
        </router-link>

        <router-link
          to="/contact"
          class="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-8 py-3 text-black font-semibold
                 hover:bg-cyan-300 transition"
        >
          {{ t('home.contact') }}
        </router-link>
      </div>
    </div>

    <!-- Divider -->
    <div class="h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>

    <!-- Skills -->
    <div class="max-w-6xl mx-auto px-6 py-24 grid gap-8 md:grid-cols-3">

      <div
        v-for="key in skillKeys"
        :key="key"
        class="rounded-2xl border border-white/10 bg-zinc-900/70 p-6
               shadow-[0_0_20px_rgba(0,255,255,0.08)] backdrop-blur"
      >
        <h2 class="text-xl font-semibold text-cyan-400 mb-3">{{ t(`home.skills.${key}.title`) }}</h2>
        <ul class="space-y-1 text-zinc-300">
          <li v-for="item in (tm(`home.skills.${key}.items`) as string[])" :key="item">{{ item }}</li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const skillKeys = ['frontend', 'gamedev', 'engineering'] as const
</script>
