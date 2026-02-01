<script setup lang="ts">
import { ref } from "vue";
import { sendAuditRequest, type AuditEmailParams } from "../lib/email";

interface FormData {
  name: string;
  businessName: string;
  contact: string;
  website: string;
  message: string;
  honeypot: string; // Anti-spam honeypot
}

const formData = ref<FormData>({
  name: "",
  businessName: "",
  contact: "",
  website: "",
  message: "",
  honeypot: "",
});

// États de l'UI
const isSending = ref(false);
const isSuccess = ref(false);
const errorMessage = ref("");

const handleSubmit = async () => {
  // Reset des messages
  errorMessage.value = "";

  // Validation basique
  if (
    !formData.value.name ||
    !formData.value.businessName ||
    !formData.value.contact
  ) {
    errorMessage.value = "Veuillez remplir tous les champs obligatoires";
    return;
  }

  // Anti-spam : si le honeypot est rempli, c'est un bot
  if (formData.value.honeypot) {
    // Fausse réussite pour ne pas alerter le bot
    isSuccess.value = true;
    resetForm();
    return;
  }

  // Préparation des paramètres pour EmailJS
  const params: AuditEmailParams = {
    name: formData.value.name,
    business: formData.value.businessName,
    contact: formData.value.contact,
    website: formData.value.website || undefined,
    message: formData.value.message || undefined,
    pageUrl: window.location.href,
    timestamp: new Date().toLocaleString("fr-FR", {
      dateStyle: "medium",
      timeStyle: "short",
    }),
  };

  // Envoi de l'email
  isSending.value = true;

  try {
    await sendAuditRequest(params);
    isSuccess.value = true;
    resetForm();
  } catch (error) {
    errorMessage.value =
      error instanceof Error
        ? error.message
        : "Une erreur est survenue. Veuillez réessayer.";
  } finally {
    isSending.value = false;
  }
};

const resetForm = () => {
  formData.value = {
    name: "",
    businessName: "",
    contact: "",
    website: "",
    message: "",
    honeypot: "",
  };
};

const closeSuccess = () => {
  isSuccess.value = false;
};
</script>

<template>
  <div class="card max-w-2xl mx-auto">
    <!-- Message de succès -->
    <div v-if="isSuccess" class="text-center space-y-6">
      <div class="text-6xl mb-4">
        <svg
          class="w-24 h-24 text-primary-400 mx-auto"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      </div>

      <h3 class="text-2xl font-bold text-primary-400 mb-2">
        Demande envoyée avec succès !
      </h3>

      <p class="text-secondary mb-6">
        Merci pour votre demande d'audit. Je vous recontacterai très
        prochainement pour discuter de votre projet.
      </p>

      <button @click="closeSuccess" class="btn-primary" type="button">
        Nouvelle demande
      </button>
    </div>

    <!-- Formulaire -->
    <form v-else @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Message d'erreur -->
      <div
        v-if="errorMessage"
        class="bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-400 text-sm"
      >
        {{ errorMessage }}
      </div>

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
          :disabled="isSending"
        />
      </div>

      <div>
        <label
          for="businessName"
          class="block text-sm font-medium text-gray-300 mb-2"
        >
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
          :disabled="isSending"
        />
      </div>

      <div>
        <label
          for="contact"
          class="block text-sm font-medium text-gray-300 mb-2"
        >
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
          :disabled="isSending"
        />
      </div>

      <div>
        <label
          for="website"
          class="block text-sm font-medium text-gray-300 mb-2"
        >
          Site actuel (optionnel)
        </label>
        <input
          id="website"
          v-model="formData.website"
          type="url"
          placeholder="https://mon-site.fr"
          class="input-field"
          :disabled="isSending"
        />
      </div>

      <div>
        <label
          for="message"
          class="block text-sm font-medium text-gray-300 mb-2"
        >
          Votre message (optionnel)
        </label>
        <textarea
          id="message"
          v-model="formData.message"
          rows="4"
          placeholder="Décrivez votre projet, vos objectifs ou vos questions..."
          class="input-field resize-none"
          :disabled="isSending"
        />
      </div>

      <!-- Honeypot anti-spam (caché) -->
      <div class="hidden" aria-hidden="true">
        <label for="company">Company (do not fill)</label>
        <input
          id="company"
          v-model="formData.honeypot"
          type="text"
          name="company"
          tabindex="-1"
          autocomplete="off"
        />
      </div>

      <button
        type="submit"
        class="btn-primary w-full text-lg flex items-center justify-center gap-2"
        :disabled="isSending"
      >
        <svg
          v-if="isSending"
          class="animate-spin h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span>{{ isSending ? "Envoi en cours..." : "Demander l'audit" }}</span>
      </button>

      <p class="text-xs text-gray-500 text-center">
        Vos informations sont envoyées directement et ne sont pas stockées sur
        le site.
      </p>
    </form>
  </div>
</template>
