import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Información Adicional
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Algunas preguntas que podrías tener sobre tu video
          </p>
        </div>

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              ¿Cuál es la diferencia entre URL válida y URL bruta?
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  <strong>
                    La URL bruta necesita ser limpiada para funcionar
                    correctamente:
                  </strong>
                </p>

                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm mb-2">
                    <strong>❌ URL Bruta (no funciona):</strong>
                  </p>
                  <code className="text-xs break-all bg-red-100 dark:bg-red-900 p-2 rounded block">
                    https://rr3---sn-njaeyn7s.c.drive.google.com/videoplayback?expire=1750490867&ei=wzRWaOa7COuso-wPmLPE-QQ&ip=190.12.73.68&id=b80d09c18eedc934&itag=140&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&met=1750480067,&mh=Ur&mm=32,26&mn=sn-njaeyn7s,sn-bg0s7nlr&ms=su,onr&mv=m&mvi=3&pl=24&rms=su,su&sc=yes&ttl=transient&susc=dr&obr=https://drive.google.com&svpuc=1&driveid=1GBvltileNpvVF9ZOHy8OhvoDDdr2b0YP&app=explorer&eaua=OfoyTv86HTM&mime=audio/mp4&vprv=1&prv=1&rqh=1&gir=yes&clen=5565128&dur=343.817&lmt=1750475668728851&mt=1750479652&fvip=4&subapp=DRIVE_WEB_FILE_VIEWER&txp=0000224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,obr,svpuc,driveid,app,eaua,mime,vprv,prv,rqh,gir,clen,dur,lmt&sig=AJfQdSswRQIhAPidxe9REx0QT-tkrPrmNdE71BqVxBn9ZMJ3yL-EmreYAiALynLLQMJ8DYoWqEuulsxuqdb5MfKXBDpJrDicoWEwQA==&lsparams=met,mh,mm,mn,ms,mv,mvi,pl,rms,sc&lsig=APaTxxMwRgIhAIFx6peRhErJcok4aA1AVHLlyq9zqz_LWGwtvq_zbJEoAiEAh7JYNqiGB_bU3g1DISyA0BteIO_q3ljzjT83KE_UnFA=&alr=yes&cpn=qpUnCj3C9GhuN8Qi&c=WEB_EMBEDDED_PLAYER&cver=1.20250616.22.00
                    <strong>
                      &range=5433922-5565127&rn=32&rbuf=16075&ump=1&srfvp=1
                    </strong>
                  </code>
                </div>

                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm mb-2">
                    <strong>✅ URL Válida (funciona):</strong>
                  </p>
                  <code className="text-xs break-all bg-green-100 dark:bg-green-900 p-2 rounded block">
                    https://rr3---sn-njaeyn7s.c.drive.google.com/videoplayback?expire=1750490867&ei=wzRWaOa7COuso-wPmLPE-QQ&ip=190.12.73.68&id=b80d09c18eedc934&itag=140&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&met=1750480067,&mh=Ur&mm=32,26&mn=sn-njaeyn7s,sn-bg0s7nlr&ms=su,onr&mv=m&mvi=3&pl=24&rms=su,su&sc=yes&ttl=transient&susc=dr&obr=https://drive.google.com&svpuc=1&driveid=1GBvltileNpvVF9ZOHy8OhvoDDdr2b0YP&app=explorer&eaua=OfoyTv86HTM&mime=audio/mp4&vprv=1&prv=1&rqh=1&gir=yes&clen=5565128&dur=343.817&lmt=1750475668728851&mt=1750479652&fvip=4&subapp=DRIVE_WEB_FILE_VIEWER&txp=0000224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,obr,svpuc,driveid,app,eaua,mime,vprv,prv,rqh,gir,clen,dur,lmt&sig=AJfQdSswRQIhAPidxe9REx0QT-tkrPrmNdE71BqVxBn9ZMJ3yL-EmreYAiALynLLQMJ8DYoWqEuulsxuqdb5MfKXBDpJrDicoWEwQA==&lsparams=met,mh,mm,mn,ms,mv,mvi,pl,rms,sc&lsig=APaTxxMwRgIhAIFx6peRhErJcok4aA1AVHLlyq9zqz_LWGwtvq_zbJEoAiEAh7JYNqiGB_bU3g1DISyA0BteIO_q3ljzjT83KE_UnFA=&alr=yes&cpn=qpUnCj3C9GhuN8Qi&c=WEB_EMBEDDED_PLAYER&cver=1.20250616.22.00
                  </code>
                </div>

                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm mb-2">
                    <strong>🔧 Cómo limpiar la URL:</strong>
                  </p>
                  <ol className="list-decimal pl-6 space-y-1 text-sm">
                    <li>
                      Busca el parámetro{" "}
                      <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">
                        &range=
                      </code>{" "}
                      en la URL
                    </li>
                    <li>
                      Elimina{" "}
                      <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">
                        &range=
                      </code>{" "}
                      y todo lo que sigue después
                    </li>
                  </ol>
                </div>

                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm mb-2">
                    <strong>🎯 Identificar Video vs Audio:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>
                      Busca{" "}
                      <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">
                        mime=video/mp4
                      </code>{" "}
                      → Es VIDEO
                    </li>
                    <li>
                      Busca{" "}
                      <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">
                        mime=audio/mp4
                      </code>{" "}
                      → Es AUDIO
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <strong>Importante:</strong> Sin limpiar la URL, la descarga
                  fallará o se cortará antes de completarse.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              ¿Cómo puedo descargar el video tutorial?
            </AccordionTrigger>
            <AccordionContent>
              Puedes descargar el video tutorial directamente desde Google Drive
              haciendo clic en el botón de descarga. Si tienes problemas,
              contáctame por WhatsApp y te ayudo con el proceso.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              Descarga de librerias FFMPEG
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  <strong>
                    Para seguir el tutorial, necesitarás descargar FFMPEG:
                  </strong>
                </p>

                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm mb-2">
                    <strong>Página de FFMPEG:</strong>
                  </p>
                  <a
                    href="https://www.gyan.dev/ffmpeg/builds/"
                    target="_blank"
                    rel="noopener"
                    className="text-blue-600 hover:underline text-sm break-all"
                  >
                    https://www.gyan.dev/ffmpeg/builds/
                  </a>
                </div>

                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm mb-2">
                    <strong>Enlace de descarga:</strong>
                  </p>
                  <a
                    href="https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-essentials.7z"
                    target="_blank"
                    rel="noopener"
                    className="text-blue-600 hover:underline text-sm break-all"
                  >
                    https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-essentials.7z
                  </a>
                </div>

                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm mb-2">
                    <strong>
                      Comando para unir video y audio (se utiliza en el minuto
                      10:35 del video):
                    </strong>
                  </p>
                  <code className="text-sm bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">
                    ffmpeg -i video.mp4 -i audio.m4a -c:v copy -c:a copy
                    out_file.mp4
                  </code>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <strong>Tip:</strong> En el bloc de notas, puedes usar Ctrl +
                  B para abrir "Buscar"
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              ¿Cómo Google Drive desactiva la opción de descargar sus videos?
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p>
                  Google Drive desactiva las descargas de video por varias
                  razones:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Control del propietario:</strong> El dueño del
                    archivo puede configurar permisos específicos
                  </li>
                </ul>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Por eso necesitamos métodos alternativos como el que se
                  explica en el video tutorial.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">
              ¿Se pierde calidad al unir audio y video con ffmpeg?
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p>
                  <strong>No se pierde calidad</strong> cuando usas los
                  parámetros correctos de ffmpeg:
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <code className="text-sm">
                    ffmpeg -i video.mp4 -i audio.m4a -c:v copy -c:a copy
                    out_file.mp4
                  </code>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>-c:v copy:</strong> Copia el video sin recodificar
                    (sin pérdida)
                  </li>
                  <li>
                    <strong>-c:a copy:</strong> Copia el audio sin recodificar
                    (sin pérdida)
                  </li>
                  <li>
                    <strong>Proceso rápido:</strong> Al no recodificar, el
                    proceso es muy rápido
                  </li>
                  <li>
                    <strong>Calidad original:</strong> Mantiene exactamente la
                    misma calidad que los archivos originales
                  </li>
                </ul>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Es simplemente un proceso de "empaquetado" que junta ambos
                  streams sin alterar su contenido.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">
              ¿Dónde encuentro las variables de sistema en Windows para añadir
              la ruta de ffmpeg?
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  <strong>
                    Pasos para agregar ffmpeg a las variables de sistema:
                  </strong>
                </p>

                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm mb-2">
                    <strong>Paso 1:</strong> Descargar WinRAR para extraer
                    archivos .7z
                  </p>
                  <a
                    href="https://www.winrar.es/descargas"
                    target="_blank"
                    rel="noopener"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    https://www.winrar.es/descargas
                  </a>
                </div>

                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    Presiona{" "}
                    <kbd className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs">
                      Windows + R
                    </kbd>
                  </li>
                  <li>
                    Escribe{" "}
                    <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-sm">
                      sysdm.cpl
                    </code>{" "}
                    y presiona Enter
                  </li>
                  <li>
                    Ve a la pestaña <strong>"Opciones avanzadas"</strong>
                  </li>
                  <li>
                    Haz clic en <strong>"Variables de entorno"</strong>
                  </li>
                  <li>
                    En "Variables del sistema", busca <strong>"Path"</strong> y
                    haz clic en <strong>"Editar"</strong>
                  </li>
                  <li>
                    Haz clic en <strong>"Nuevo"</strong> y agrega la ruta donde
                    extrajiste ffmpeg
                  </li>
                  <li>
                    Ejemplo:{" "}
                    <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-sm">
                      C:\ffmpeg
                    </code>
                  </li>
                  <li>
                    Haz clic en <strong>"Aceptar"</strong> en todas las ventanas
                  </li>
                </ol>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <strong>Importante:</strong> Reinicia el símbolo del sistema
                  para que los cambios tengan efecto.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left">
              ¿Cómo entro al cmd desde el explorador de archivos?
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  <strong>
                    Hay varias formas de abrir el cmd en la carpeta que
                    necesitas:
                  </strong>
                </p>

                <div className="space-y-3">
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                    <p className="text-sm mb-2">
                      <strong>Método 1: Desde la barra de direcciones</strong>
                    </p>
                    <ol className="list-decimal pl-6 space-y-1 text-sm">
                      <li>
                        Navega a la carpeta donde tienes los archivos de video y
                        audio
                      </li>
                      <li>
                        Haz clic en la barra de direcciones (donde aparece la
                        ruta)
                      </li>
                      <li>
                        Escribe{" "}
                        <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">
                          cmd
                        </code>{" "}
                        y presiona Enter
                      </li>
                    </ol>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                    <p className="text-sm mb-2">
                      <strong>Método 2: Navegación manual</strong>
                    </p>
                    <ol className="list-decimal pl-6 space-y-1 text-sm">
                      <li>Abre cmd normalmente (Windows + R, escribe "cmd")</li>
                      <li>
                        Usa{" "}
                        <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">
                          cd
                        </code>{" "}
                        para navegar
                      </li>
                      <li>
                        Ejemplo:{" "}
                        <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">
                          cd C:\Users\tu_usuario\Downloads
                        </code>
                      </li>
                    </ol>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <strong>Recomendación:</strong> El Método 1 es el más rápido y
                  directo para usar ffmpeg en la carpeta correcta.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-left">
              ¿Cómo abrir las herramientas de desarrollo?
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  <strong>
                    Hay 3 formas principales de abrir las herramientas de
                    desarrollo del navegador:
                  </strong>
                </p>

                <div className="space-y-3">
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                    <p className="text-sm mb-2">
                      <strong>Método 1: Atajo de teclado principal</strong>
                    </p>
                    <p className="text-sm">
                      Presiona{" "}
                      <kbd className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs">
                        Ctrl + Shift + I
                      </kbd>
                    </p>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                    <p className="text-sm mb-2">
                      <strong>Método 2: Tecla de función</strong>
                    </p>
                    <p className="text-sm">
                      Presiona{" "}
                      <kbd className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs">
                        F12
                      </kbd>
                    </p>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                    <p className="text-sm mb-2">
                      <strong>Método 3: Desde el menú del navegador</strong>
                    </p>
                    <ol className="list-decimal pl-6 space-y-1 text-sm">
                      <li>
                        Haz clic en los 3 puntos verticales (⋮) en la esquina
                        superior derecha
                      </li>
                      <li>
                        Ve a <strong>"More tools"</strong> o{" "}
                        <strong>"Más herramientas"</strong>
                      </li>
                      <li>
                        Selecciona <strong>"Developer tools"</strong> o{" "}
                        <strong>"Herramientas para desarrolladores"</strong>
                      </li>
                    </ol>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <strong>Tip:</strong> Una vez abiertas, ve a la pestaña{" "}
                  <strong>"Network"</strong> o <strong>"Red"</strong> y filtra
                  por "playback" para capturar las URLs de descarga como se
                  muestra en el tutorial.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
