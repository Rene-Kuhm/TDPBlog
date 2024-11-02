import * as React from "react";

const disqusShortname = "https-tdpblog-com-ar"; // Reemplaza con tu shortname de Disqus

function BlogComments() {
    React.useEffect(() => {
        // Configuración de Disqus en el contexto global
        (window as any).disqus_config = function () {
            this.page.url = window.location.href; // URL canónica de la página
            this.page.identifier = window.location.pathname; // Identificador único de la página
        };

        // Inserta el script de Disqus en el DOM
        const d = document;
        const s = d.createElement("script");
        s.src = `https://${disqusShortname}.disqus.com/embed.js`;
        s.setAttribute("data-timestamp", `${+new Date()}`);
        (d.head || d.body).appendChild(s);

        return () => {
            // Limpieza al desmontar el componente para evitar duplicación
            if (s.parentNode) {
                s.parentNode.removeChild(s);
            }
            (window as any).DISQUS = undefined; // Limpia el objeto DISQUS al desmontar
        };
    }, []);

    return (
        <div id="inject-comments" className="w-full">
            <div id="disqus_thread"></div>
            <noscript>
                Please enable JavaScript to view the{" "}
                <a href="https://disqus.com/?ref_noscript">
                    comments powered by René Kuhm.
                </a>
            </noscript>
        </div>
    );
}

export default BlogComments;
