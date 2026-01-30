<script setup lang="ts">
import { ref } from 'vue'
import AuditForm from './components/AuditForm.vue'
import ExampleCard from './components/ExampleCard.vue'

const scrollToContact = () => {
  const element = document.getElementById('contact')
  element?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToAudit = () => {
  const element = document.getElementById('audit')
  element?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToExamples = () => {
  const element = document.getElementById('examples')
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-dark-700">
      <div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="text-xl font-bold text-white">Gaspar Rivoire-Gaiao</span>
          <span class="hidden sm:inline text-gray-400 text-sm">| Développeur Web Lyon</span>
        </div>
        
        <button
          @click="scrollToContact"
          class="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
          aria-label="Me contacter"
        >
          Me contacter
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-dark-900 to-dark-900"></div>
      
      <div class="relative max-w-5xl mx-auto px-6">
        <!-- Header -->
        <div class="text-center mb-16">
          <div class="inline-block mb-4">
            <span class="text-primary-400 font-semibold text-sm md:text-base tracking-wider uppercase">
              📍 Lyon
            </span>
          </div>
          
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transformez votre site<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              en source de clients
            </span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Sites web modernes + visibilité Google pour les commerces locaux à Lyon
          </p>
          
          <p class="text-lg text-gray-400 mb-12">
            Gaspar Rivoire-Gaiao — Développeur Web
          </p>
        </div>

        <!-- Bénéfices -->
        <div class="grid md:grid-cols-3 gap-6 mb-16">
          <div class="card text-center">
            <div class="text-4xl mb-4">⚡</div>
            <h3 class="font-semibold text-lg mb-2">Site rapide et mobile-first</h3>
            <p class="text-gray-400 text-sm">Optimisé pour tous les écrans</p>
          </div>
          
          <div class="card text-center">
            <div class="text-4xl mb-4">📍</div>
            <h3 class="font-semibold text-lg mb-2">Google Maps & SEO local</h3>
            <p class="text-gray-400 text-sm">Soyez trouvé par vos clients</p>
          </div>
          
          <div class="card text-center">
            <div class="text-4xl mb-4">💬</div>
            <h3 class="font-semibold text-lg mb-2">Contact / réservation en 1 clic</h3>
            <p class="text-gray-400 text-sm">Simplifiez la prise de contact</p>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="tel:0787483835" 
            class="btn-primary w-full sm:w-auto text-center text-lg"
            aria-label="Appeler Gaspar Rivoire-Gaiao"
          >
            📞 Appeler
          </a>
          
          <a 
            href="https://wa.me/33787483835?text=Bonjour%20Gaspar%2C%20je%20souhaite%20discuter%20de%20mon%20projet%20web" 
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary w-full sm:w-auto text-center text-lg"
            aria-label="Contacter via WhatsApp"
          >
            💬 WhatsApp
          </a>
        </div>

      </div>
    </section>

    <!-- Audit Form Section -->
    <section id="audit" class="py-20 bg-dark-800/50">
      <div class="max-w-3xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-5xl font-bold mb-4">
            Audit gratuit en <span class="text-primary-400">10 minutes</span>
          </h2>
          <p class="text-lg text-gray-400">
            Découvrez comment améliorer votre présence en ligne
          </p>
        </div>

        <AuditForm />
      </div>
    </section>

    <!-- Examples Section -->
    <section id="examples" class="py-20">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-5xl font-bold mb-4">
            Exemples de projets
          </h2>
          <p class="text-lg text-gray-400">
            Des sites qui convertissent les visiteurs en clients
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <ExampleCard
            title="Restaurant Le Lyonnais"
            description="Site vitrine + réservation en ligne. Augmentation de 40% des réservations en 3 mois."
            @view-example="scrollToExamples"
          />
          
          <ExampleCard
            title="Salon de coiffure Élégance"
            description="Présence Google Maps optimisée + prise de RDV. +60% de nouveaux clients."
            @view-example="scrollToExamples"
          />
        </div>
        <!-- Scroll indicator -->
        <div class="text-center">
          <button 
            @click="scrollToAudit"
            class="text-gray-400 hover:text-primary-400 transition-colors text-sm"
            aria-label="Descendre vers le formulaire d'audit"
          >
            ↓ Audit gratuit
          </button>
        </div>      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-4">
            Contactez-moi
          </h2>
          <p class="text-lg text-gray-400">
            Discutons de votre projet web
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Contact Info Cards -->
          <div class="card group hover:border-primary-500/50">
            <div class="flex items-start gap-4">
              <div class="text-3xl">📞</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2 text-gray-200">Téléphone</h3>
                <a 
                  href="tel:0787483835" 
                  class="text-primary-400 hover:text-primary-300 text-lg transition-colors"
                >
                  07 87 48 38 35
                </a>
                <p class="text-sm text-gray-500 mt-2">Lundi - Vendredi, 9h - 18h</p>
              </div>
            </div>
          </div>

          <div class="card group hover:border-primary-500/50">
            <div class="flex items-start gap-4">
              <div class="text-3xl">💬</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2 text-gray-200">WhatsApp</h3>
                <a 
                  href="https://wa.me/33787483835?text=Bonjour%20Gaspar%2C%20je%20souhaite%20discuter%20de%20mon%20projet%20web" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary-400 hover:text-primary-300 text-lg transition-colors"
                >
                  Envoyer un message
                </a>
                <p class="text-sm text-gray-500 mt-2">Réponse rapide garantie</p>
              </div>
            </div>
          </div>

          <div class="card group hover:border-primary-500/50">
            <div class="flex items-start gap-4">
              <div class="text-3xl">✉️</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2 text-gray-200">Email</h3>
                <a 
                  href="mailto:gaspar.rivoire-gaiao@example.com" 
                  class="text-primary-400 hover:text-primary-300 text-lg transition-colors break-all"
                >
                  contact@gaspar-dev.fr
                </a>
                <p class="text-sm text-gray-500 mt-2">Réponse sous 24h</p>
              </div>
            </div>
          </div>

          <div class="card group hover:border-primary-500/50">
            <div class="flex items-start gap-4">
              <div class="text-3xl">📍</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2 text-gray-200">Localisation</h3>
                <p class="text-lg text-gray-300">Lyon, France</p>
                <p class="text-sm text-gray-500 mt-2">Disponible en présentiel ou distanciel</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a 
            href="tel:0787483835" 
            class="btn-primary w-full sm:w-auto text-center text-lg"
            aria-label="Appeler maintenant"
          >
            📞 Appeler maintenant
          </a>
          
          <a 
            href="https://wa.me/33787483835?text=Bonjour%20Gaspar%2C%20je%20souhaite%20discuter%20de%20mon%20projet%20web" 
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary w-full sm:w-auto text-center text-lg"
            aria-label="Contacter via WhatsApp"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 border-t border-dark-700">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center text-gray-500 text-sm">
          <p>© {{ new Date().getFullYear() }} Gaspar Rivoire-Gaiao — Lyon</p>
          <p class="mt-2">Développeur Web spécialisé en commerces locaux</p>
        </div>
      </div>
    </footer>
  </div>
</template>
