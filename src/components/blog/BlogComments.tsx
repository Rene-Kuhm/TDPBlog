import * as React from "react";

function BlogComments() {
    React.useEffect(() => {
        // Inserta el script de Remark42 en el DOM
        const d = document;
        const s = d.createElement("script");
        s.src = "https://tdpblog.com.ar/web/embed.js"; // URL del script de Remark42 en localhost
        s.async = true; // Cargar asíncronamente

        // Configura Remark42 antes de cargar el script
        (window as any).remark_config = {
            host: "https://tdpblog.com.ar", // URL del servidor Remark42
            site_id: "tdpblog.com.ar"           // ID del sitio para Remark42
        };

        (d.head || d.body).appendChild(s);

        return () => {
            // Limpieza al desmontar el componente para evitar duplicación
            if (s.parentNode) {
                s.parentNode.removeChild(s);
            }
            (window as any).remark_config = undefined; // Limpia la configuración al desmontar
        };
    }, []);

    return (
        <div id="inject-comments" className="w-full">
            <div id="remark42"></div> {/* Contenedor para los comentarios */}
        </div>
    );
}

export default BlogComments;
