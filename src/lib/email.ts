import emailjs from "@emailjs/browser";

// Interface pour les paramètres de l'email d'audit
export interface AuditEmailParams {
  name: string;
  business: string;
  contact: string;
  website?: string;
  message?: string;
  pageUrl: string;
  timestamp: string;
}

// Initialisation d'EmailJS avec la clé publique
const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!publicKey) {
    throw new Error("EmailJS public key is not configured");
  }
  emailjs.init(publicKey);
};

// Fonction pour envoyer une demande d'audit
export const sendAuditRequest = async (
  params: AuditEmailParams,
): Promise<void> => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  if (!serviceId || !templateId) {
    throw new Error("EmailJS configuration is incomplete");
  }

  // Initialiser EmailJS
  initEmailJS();

  try {
    // Envoyer l'email via EmailJS
    const response = await emailjs.send(serviceId, templateId, {
      from_name: params.name,
      business_name: params.business,
      contact_info: params.contact,
      website_url: params.website || "Non renseigné",
      message: params.message || "Aucun message spécifique",
      page_url: params.pageUrl,
      timestamp: params.timestamp,
    });

    if (response.status !== 200) {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw new Error("Échec de l'envoi de la demande. Veuillez réessayer.");
  }
};
