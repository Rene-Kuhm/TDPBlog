import * as React from "react";
import { Settings } from "@/config.ts";

const id = "inject-comments";
const disqusShortname = "https-tdpblog-com-ar"; // Reemplaza con el shortname de tu sitio en Disqus

function BlogComments() {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    
        // Configuración de Disqus sin `this`
        const disqus_config = function () {
            const pageUrl = window.location.href; // URL única de la página
            const pageIdentifier = window.location.pathname; // Identificador único de la página
            return {
                page: { url: pageUrl, identifier: pageIdentifier }
            };
        };
    
        // Carga el script de Disqus
        const d = document;
        const s = d.createElement("script");
        s.src = `https://${disqusShortname}.disqus.com/embed.js`;
        s.setAttribute("data-timestamp", `${+new Date()}`);
        (d.head || d.body).appendChild(s);
    
        return () => {
            // Limpieza al desmontar el componente
            if (s.parentNode) {
                s.parentNode.removeChild(s);
            }
            (window as any).DISQUS = undefined; // Limpia el objeto DISQUS en caso de re-montaje
        };
    }, []);
    
    return (
        <div id={id} className="w-full">
            {mounted ? (
                <div id="disqus_thread"></div>
            ) : (
                <p>Cargando comentarios...</p>
            )}
        </div>
    );
}

export default BlogComments;
