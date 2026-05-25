<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import AuditForm from "./components/AuditForm.vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40;
};

onMounted(() => window.addEventListener("scroll", handleScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));

const scrollToContact = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};

const scrollToAudit = () => {
  document.getElementById("audit")?.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<template>
  <div class="min-h-screen">

    <!-- Sticky mobile CTA bar -->
    <div class="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-dark-800 bg-dark-950/95 backdrop-blur-md px-4 py-3 flex gap-3">
      <a
        href="tel:+33787483835"
        class="flex-1 flex items-center justify-center gap-2 py-3 bg-dark-800 hover:bg-dark-700 text-white font-semibold rounded-lg transition-colors text-sm active:scale-[0.97]"
        aria-label="Appeler Gaspar"
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        Appeler
      </a>
      <a
        href="https://wa.me/33787483835"
        target="_blank"
        rel="noopener noreferrer"
        class="flex-1 flex items-center justify-center gap-2 py-3 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors text-sm active:scale-[0.97]"
        aria-label="Contacter sur WhatsApp"
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        WhatsApp
      </a>
    </div>

    <!-- Navbar -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
      :class="isScrolled
        ? 'bg-dark-950/98 backdrop-blur-md border-dark-800 shadow-lg shadow-black/20'
        : 'bg-dark-950/90 backdrop-blur-sm border-dark-800/40'"
    >
      <div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="text-xl font-bold text-white">RIVOIRE-GAIAO Gaspar</span>
          <span class="hidden sm:inline text-gray-400 text-sm">| Développeur Web Lyon</span>
        </div>
        <button
          @click="scrollToContact"
          class="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-primary-500/20 focus:outline-none focus:ring-2 focus:ring-primary-500/30 active:scale-[0.98]"
          aria-label="Me contacter"
        >
          Me contacter
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-dark-850 via-dark-900 to-dark-900"></div>
      <!-- Decorative glow -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary-500/4 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative max-w-5xl mx-auto px-6">
        <!-- Header -->
        <div class="text-center mb-16">
          <div class="inline-block mb-6 animate-fade-up">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/25 text-primary-400 font-semibold text-sm tracking-wider uppercase">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Lyon
            </span>
          </div>

          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-up animation-delay-100">
            Transformez votre site<br />
            <span class="text-primary-400"> en source de clients </span>
          </h1>

          <p class="text-xl md:text-2xl text-secondary mb-12 max-w-3xl mx-auto animate-fade-up animation-delay-200">
            Sites web modernes + visibilité Google pour les commerces locaux à Lyon
          </p>
        </div>

        <!-- Business Benefits -->
        <div class="max-w-5xl mx-auto mb-16 animate-fade-up animation-delay-300">
          <div class="flex flex-col md:flex-row gap-6 md:gap-8 md:items-stretch">
            <!-- Bullet 1 -->
            <div class="flex items-start gap-4 bg-dark-850/50 border border-dark-800 rounded-lg p-6 flex-1 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5">
              <div class="flex-shrink-0 mt-1">
                <svg class="w-8 h-8 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </div>
              <div class="flex flex-col h-full flex-1">
                <h3 class="font-semibold text-white text-lg mb-2.5">Plus de clients depuis Google</h3>
                <p class="text-secondary text-sm leading-relaxed mt-auto">Soyez visible quand on vous cherche près de chez vous</p>
              </div>
            </div>

            <!-- Bullet 2 -->
            <div class="flex items-start gap-4 bg-dark-850/50 border border-dark-800 rounded-lg p-6 flex-1 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5">
              <div class="flex-shrink-0 mt-1">
                <svg class="w-8 h-8 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <div class="flex flex-col h-full flex-1">
                <h3 class="font-semibold text-white text-lg mb-2.5">Un site qui donne envie de venir</h3>
                <p class="text-secondary text-sm leading-relaxed mt-auto">Moderne, rapide et rassurant sur mobile</p>
              </div>
            </div>

            <!-- Bullet 3 -->
            <div class="flex items-start gap-4 bg-dark-850/50 border border-dark-800 rounded-lg p-6 flex-1 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5">
              <div class="flex-shrink-0 mt-1">
                <svg class="w-8 h-8 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2v11h3v9l7-12h-4l4-8z" />
                </svg>
              </div>
              <div class="flex flex-col h-full flex-1">
                <h3 class="font-semibold text-white text-lg mb-2.5">Contact en 1 clic</h3>
                <p class="text-secondary text-sm leading-relaxed mt-auto">Appel, WhatsApp ou réservation immédiate</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animation-delay-400">
          <a
            href="tel:+33787483835"
            class="btn-primary w-full sm:w-auto text-center text-lg flex items-center justify-center gap-2"
            aria-label="Appeler RIVOIRE-GAIAO Gaspar"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Appeler
          </a>

          <a
            href="https://wa.me/33787483835"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-whatsapp w-full sm:w-auto text-center text-lg flex items-center justify-center gap-2"
            aria-label="Contacter sur WhatsApp"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>

          <button
            @click="scrollToAudit"
            class="btn-secondary w-full sm:w-auto text-center text-lg flex items-center justify-center gap-2"
            aria-label="Demander un audit gratuit"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
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
    <section id="contact" class="py-20 bg-gradient-to-b from-dark-900 to-dark-850">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-4">Contactez-moi</h2>
          <p class="text-lg text-secondary">Discutons de votre projet web</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <!-- Phone card -->
          <div class="card group hover:border-primary-500/50">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2 text-gray-200">Téléphone</h3>
                <a
                  href="tel:+33787483835"
                  class="text-primary-400 hover:text-primary-300 text-lg transition-colors block"
                >
                  07 87 48 38 35
                </a>
                <a
                  href="https://wa.me/33787483835"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-sm mt-2 transition-colors"
                >
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp disponible
                </a>
                <p class="text-sm text-gray-500 mt-2">Lun - Ven, 9h - 18h</p>
              </div>
            </div>
          </div>

          <!-- Email card -->
          <div class="card group hover:border-primary-500/50">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
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

          <!-- Location card -->
          <div class="card group hover:border-primary-500/50">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2 text-gray-200">Localisation</h3>
                <p class="text-lg text-gray-300">Lyon, France</p>
                <p class="text-sm text-gray-500 mt-2">Disponible en présentiel ou distanciel</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="flex justify-center items-center mt-12">
          <button
            @click="scrollToAudit"
            class="btn-primary w-full sm:w-auto text-center text-lg flex items-center justify-center gap-2"
            aria-label="Demander un audit gratuit"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
            </svg>
            Demander un audit gratuit
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 pb-28 md:pb-12 border-t border-dark-700">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center text-secondary text-sm">
          <p>© {{ new Date().getFullYear() }} RIVOIRE-GAIAO Gaspar — Lyon</p>
          <p class="mt-2">Développeur Web spécialisé en commerces locaux</p>
        </div>
      </div>
    </footer>
  </div>
</template>
