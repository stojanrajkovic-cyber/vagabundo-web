import SiteHeader from "@/components/SiteHeader";

export default function PrivacyPolicyES() {
  return (
    <>
      <SiteHeader locale={"es"} />

      <main className="mx-auto max-w-3xl px-6 py-16">

        <h1 className="text-3xl font-bold mb-6">
        Política de Privacidad
        </h1>

        <p className="mb-4">
        Vagabundo ("nosotros", "nuestro", "nos") respeta su privacidad. Esta
        Política de Privacidad explica cómo se recopila, utiliza y protege la
        información al utilizar la aplicación móvil y el sitio web de Vagabundo.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Información que recopilamos
        </h2>

        <p className="mb-4">
        Vagabundo recopila únicamente la información mínima necesaria para
        operar el servicio. Esto puede incluir:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>Información de la cuenta (correo electrónico o proveedor de autenticación)</li>
        <li>Preferencias de viaje y destinos seleccionados</li>
        <li>Itinerarios de viaje generados</li>
        <li>Análisis de uso anónimos</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Transparencia de Inteligencia Artificial
        </h2>

        <p className="mb-4">
        Vagabundo utiliza inteligencia artificial para generar itinerarios de
        viaje. Las sugerencias proporcionadas por la aplicación se generan
        automáticamente en función de las entradas del usuario, como la ciudad,
        la duración del viaje y las preferencias.
        </p>

        <p className="mb-4">
        El contenido generado por inteligencia artificial puede contener
        ocasionalmente imprecisiones, información desactualizada o ubicaciones
        no disponibles. Los usuarios deben verificar de forma independiente
        información importante de viaje, como horarios de apertura,
        disponibilidad y condiciones de seguridad antes de visitar cualquier
        lugar.
        </p>

        <p className="mb-4">
        Vagabundo no proporciona asesoramiento profesional de viaje,
        legal o de seguridad. Los itinerarios generados están destinados
        únicamente a fines informativos e inspiracionales.
        </p>

        <p className="mb-4">
        Las entradas del usuario, como la ciudad seleccionada y las
        preferencias de viaje, pueden enviarse a proveedores de IA
        para generar planes de viaje.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Servicios de Terceros
        </h2>

        <p className="mb-4">
        Vagabundo depende de servicios confiables de terceros, incluidos:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>OpenAI – generación de itinerarios mediante IA</li>
        <li>Firebase – autenticación y almacenamiento de datos</li>
        <li>Apple / Google – autenticación de inicio de sesión</li>
        <li>Servicios de mapas – visualización de ubicaciones de viaje</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Retención de Datos
        </h2>

        <p className="mb-4">
        Los datos de la cuenta del usuario y los planes de viaje guardados
        se almacenan únicamente mientras el usuario mantenga una cuenta
        activa. Cuando un usuario elimina su cuenta, todos los datos
        asociados se eliminan permanentemente de nuestros sistemas en
        un período de tiempo razonable.
        </p>

        <p className="mb-4">
        Los planes de viaje y los datos de la cuenta del usuario pueden
        almacenarse de forma segura en infraestructura en la nube para
        permitir guardar y sincronizar viajes entre dispositivos.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Analítica
        </h2>

        <p className="mb-4">
        Se pueden recopilar análisis de uso anónimos para mejorar el
        rendimiento de la aplicación y sus funcionalidades.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Seguridad
        </h2>

        <p className="mb-4">
        Tomamos medidas razonables para proteger la información de los
        usuarios utilizando prácticas modernas de seguridad e
        infraestructura en la nube confiable. Sin embargo, ningún
        servicio en internet puede garantizar una seguridad completa.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Eliminación de Cuenta
        </h2>

        <p className="mb-4">
        Los usuarios pueden eliminar permanentemente su cuenta desde
        dentro de la aplicación. Cuando una cuenta se elimina, todos
        los datos asociados al usuario se eliminan.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Cambios en esta Política
        </h2>

        <p className="mb-4">
        Esta Política de Privacidad puede actualizarse ocasionalmente
        para reflejar mejoras en la aplicación o requisitos legales.
        </p>

        <p className="mb-4">
        Dependiendo de su región, puede tener derechos adicionales
        respecto a sus datos personales bajo las leyes de privacidad
        aplicables.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Contacto
        </h2>

        <p>
        Si tiene alguna pregunta sobre esta Política de Privacidad,
        por favor contáctenos en:
        <strong>support@vagabundo.app</strong>
        </p>

        <p className="text-sm text-gray-500 mb-8">
        Fecha de entrada en vigor: marzo de 2026
        </p>

      </main>
    </>
  );
}