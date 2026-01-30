<script setup lang="ts">
import { ref, computed } from 'vue'

interface FormData {
  name: string
  businessName: string
  contact: string
  website: string
}

const formData = ref<FormData>({
  name: '',
  businessName: '',
  contact: '',
  website: ''
})

const submitted = ref(false)
const showConfirmation = ref(false)

const whatsappMessage = computed(() => {
  const msg = `Bonjour Gaspar,

Je demande un audit gratuit de mon site web :

👤 Nom : ${formData.value.name}
🏪 Commerce : ${formData.value.businessName}
📞 Contact : ${formData.value.contact}
${formData.value.website ? `🌐 Site actuel : ${formData.value.website}` : ''}

Je souhaite discuter des opportunités d'amélioration.`
  
  return encodeURIComponent(msg)
})

const whatsappLink = computed(() => {
  return `https://wa.me/33787483835?text=${whatsappMessage.value}`
})

const handleSubmit = () => {
  if (!formData.value.name || !formData.value.businessName || !formData.value.contact) {
    alert('Veuillez remplir tous les champs obligatoires')
    return
  }
  
  submitted.value = true
  showConfirmation.value = true
}

const copyMessage = async () => {
  const decodedMessage = decodeURIComponent(whatsappMessage.value)
  
  try {
    await navigator.clipboard.writeText(decodedMessage)
    alert('Message copié dans le presse-papier !')
  } catch (err) {
    console.error('Erreur lors de la copie:', err)
    // Fallback pour les navigateurs plus anciens
    const textArea = document.createElement('textarea')
    textArea.value = decodedMessage
    textArea.style.position = 'fixed'
    textArea.style.left = '-999999px'
    document.body.appendChild(textArea)
    textArea.select()
    try {
      document.execCommand('copy')
      alert('Message copié dans le presse-papier !')
    } catch (err2) {
      alert('Impossible de copier le message')
    }
    document.body.removeChild(textArea)
  }
}

const openWhatsApp = () => {
  window.open(whatsappLink.value, '_blank')
}

const resetForm = () => {
  formData.value = {
    name: '',
    businessName: '',
    contact: '',
    website: ''
  }
  submitted.value = false
  showConfirmation.value = false
}
</script>

<template>
  <div class="card max-w-2xl mx-auto">
    <form v-if="!showConfirmation" @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
          Nom <span class="text-red-400">*</span>
        </label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          required
          placeholder="Jean Dupont"
          class="input-field"
          aria-required="true"
        />
      </div>

      <div>
        <label for="businessName" class="block text-sm font-medium text-gray-300 mb-2">
          Nom du commerce <span class="text-red-400">*</span>
        </label>
        <input
          id="businessName"
          v-model="formData.businessName"
          type="text"
          required
          placeholder="Restaurant Le Lyonnais"
          class="input-field"
          aria-required="true"
        />
      </div>

      <div>
        <label for="contact" class="block text-sm font-medium text-gray-300 mb-2">
          Téléphone ou Email <span class="text-red-400">*</span>
        </label>
        <input
          id="contact"
          v-model="formData.contact"
          type="text"
          required
          placeholder="06 12 34 56 78 ou email@exemple.fr"
          class="input-field"
          aria-required="true"
        />
      </div>

      <div>
        <label for="website" class="block text-sm font-medium text-gray-300 mb-2">
          Site actuel (optionnel)
        </label>
        <input
          id="website"
          v-model="formData.website"
          type="url"
          placeholder="https://mon-site.fr"
          class="input-field"
        />
      </div>

      <button
        type="submit"
        class="btn-primary w-full text-lg"
      >
        Demander l'audit
      </button>

      <p class="text-xs text-gray-500 text-center">
        Vos informations ne seront pas stockées. Elles servent uniquement à préparer le message.
      </p>
    </form>

    <!-- Confirmation Message -->
    <div v-else class="text-center space-y-6">
      <div class="text-6xl mb-4">✅</div>
      
      <h3 class="text-2xl font-bold text-primary-400 mb-2">
        Demande enregistrée !
      </h3>
      
      <p class="text-gray-300 mb-6">
        Votre message est prêt. Choisissez comment me l'envoyer :
      </p>

      <div class="bg-dark-900 p-6 rounded-lg mb-6 text-left">
        <p class="text-sm text-gray-400 mb-2 font-semibold">Aperçu du message :</p>
        <pre class="text-sm text-gray-300 whitespace-pre-wrap font-mono">{{ decodeURIComponent(whatsappMessage) }}</pre>
      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <button
          @click="copyMessage"
          class="btn-secondary flex-1"
        >
          📋 Copier le message
        </button>
        
        <button
          @click="openWhatsApp"
          class="btn-primary flex-1"
        >
          💬 Ouvrir WhatsApp
        </button>
      </div>

      <button
        @click="resetForm"
        class="text-gray-500 hover:text-gray-300 text-sm transition-colors mt-4"
      >
        ← Nouvelle demande
      </button>
    </div>
  </div>
</template>
