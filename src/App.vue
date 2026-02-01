<script setup lang="ts">
import AuditForm from "./components/AuditForm.vue";

const scrollToContact = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

const scrollToAudit = () => {
  const element = document.getElementById("audit");
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<template>
  <div class="min-h-screen">
    <!-- Navbar -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 bg-dark-950/95 backdrop-blur-sm border-b border-dark-800"
    >
      <div
        class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between"
      >
        <div class="flex items-center gap-3">
          <span class="text-xl font-bold text-white">RIVOIRE-GAIAO Gaspar</span>
          <span class="hidden sm:inline text-gray-400 text-sm"
            >| Développeur Web Lyon</span
          >
        </div>

        <button
          @click="scrollToContact"
          class="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500/30"
          aria-label="Me contacter"
        >
          Me contacter
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <!-- Background gradient -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-dark-850 via-dark-900 to-dark-900"
      ></div>

      <div class="relative max-w-5xl mx-auto px-6">
        <!-- Header -->
        <div class="text-center mb-16">
          <div class="inline-block mb-4">
            <span
              class="text-primary-400 font-semibold text-sm md:text-base tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                />
              </svg>
              Lyon
            </span>
          </div>

          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Transformez votre site<br />
            <span class="text-primary-400"> en source de clients </span>
          </h1>

          <p class="text-xl md:text-2xl text-secondary mb-12 max-w-3xl mx-auto">
            Sites web modernes + visibilité Google pour les commerces locaux à
            Lyon
          </p>
        </div>

        <!-- Business Benefits -->
        <div class="max-w-5xl mx-auto mb-16">
          <div
            class="flex flex-col md:flex-row gap-6 md:gap-8 md:items-stretch"
          >
            <!-- Bullet 1 -->
            <div
              class="flex items-start gap-4 bg-dark-850/50 border border-dark-800 rounded-lg p-6 flex-1"
            >
              <div class="flex-shrink-0 mt-1">
                <svg
                  class="w-8 h-8 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"
                  />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div class="flex flex-col h-full flex-1">
                <h3 class="font-semibold text-white text-lg mb-2.5">
                  Plus de clients depuis Google
                </h3>
                <p class="text-secondary text-sm leading-relaxed mt-auto">
                  Soyez visible quand on vous cherche près de chez vous
                </p>
              </div>
            </div>

            <!-- Bullet 2 -->
            <div
              class="flex items-start gap-4 bg-dark-850/50 border border-dark-800 rounded-lg p-6 flex-1"
            >
              <div class="flex-shrink-0 mt-1">
                <svg
                  class="w-8 h-8 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              </div>
              <div class="flex flex-col h-full flex-1">
                <h3 class="font-semibold text-white text-lg mb-2.5">
                  Un site qui donne envie de venir
                </h3>
                <p class="text-secondary text-sm leading-relaxed mt-auto">
                  Moderne, rapide et rassurant sur mobile
                </p>
              </div>
            </div>

            <!-- Bullet 3 -->
            <div
              class="flex items-start gap-4 bg-dark-850/50 border border-dark-800 rounded-lg p-6 flex-1"
            >
              <div class="flex-shrink-0 mt-1">
                <svg
                  class="w-8 h-8 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2v11h3v9l7-12h-4l4-8z" />
                </svg>
              </div>
              <div class="flex flex-col h-full flex-1">
                <h3 class="font-semibold text-white text-lg mb-2.5">
                  Contact en 1 clic
                </h3>
                <p class="text-secondary text-sm leading-relaxed mt-auto">
                  Appel, WhatsApp ou réservation immédiate
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button
            @click="scrollToContact"
            class="btn-primary w-full sm:w-auto text-center text-lg flex items-center justify-center gap-2"
            aria-label="Contacter RIVOIRE-GAIAO Gaspar"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
              />
            </svg>
            Appeler
          </button>

          <button
            @click="scrollToAudit"
            class="btn-secondary w-full sm:w-auto text-center text-lg flex items-center justify-center gap-2"
            aria-label="Demander un audit gratuit"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
              />
            </svg>
            Audit gratuit
          </button>
        </div>
      </div>
    </section>

    <!-- Audit Form Section -->
    <section id="audit" class="py-20 bg-dark-850">
      <div class="max-w-3xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-5xl font-bold mb-4">
            Audit gratuit en <span class="text-primary-400">10 minutes</span>
          </h2>
          <p class="text-lg text-secondary">
            Découvrez comment améliorer votre présence en ligne
          </p>
        </div>

        <AuditForm />
      </div>
    </section>

    <!-- Contact Section -->
    <section
      id="contact"
      class="py-20 bg-gradient-to-b from-dark-900 to-dark-850"
    >
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-4">Contactez-moi</h2>
          <p class="text-lg text-secondary">Discutons de votre projet web</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Contact Info Cards -->
          <div class="card group hover:border-primary-500/50">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <svg
                  class="w-8 h-8 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                  />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2 text-gray-200">
                  Téléphone
                </h3>
                <span class="text-primary-400 text-lg"> 07 87 48 38 35 </span>
                <p class="text-sm text-gray-500 mt-2">
                  Lundi - Vendredi, 9h - 18h
                </p>
              </div>
            </div>
          </div>

          <div class="card group hover:border-primary-500/50">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <svg
                  class="w-8 h-8 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-xl font-semibold mb-2 text-gray-200">Email</h3>
                <a
                  href="mailto:gasparrivoire@gmail.com"
                  class="text-primary-400 hover:text-primary-300 text-base transition-colors break-words block"
                >
                  gasparrivoire@gmail.com
                </a>
                <p class="text-sm text-gray-500 mt-2">Réponse sous 24h</p>
              </div>
            </div>
          </div>

          <div class="card group hover:border-primary-500/50">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <svg
                  class="w-8 h-8 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2 text-gray-200">
                  Localisation
                </h3>
                <p class="text-lg text-gray-300">Lyon, France</p>
                <p class="text-sm text-gray-500 mt-2">
                  Disponible en présentiel ou distanciel
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex justify-center items-center mt-12">
          <button
            @click="scrollToAudit"
            class="btn-primary w-full sm:w-auto text-center text-lg flex items-center justify-center gap-2"
            aria-label="Demander un audit gratuit"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
              />
            </svg>
            Demander un audit gratuit
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 border-t border-dark-700">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center text-secondary text-sm">
          <p>© {{ new Date().getFullYear() }} RIVOIRE-GAIAO Gaspar — Lyon</p>
          <p class="mt-2">Développeur Web spécialisé en commerces locaux</p>
        </div>
      </div>
    </footer>
  </div>
</template>
