import * as React from "react";

function BlogComments() {
    React.useEffect(() => {
        // Inserta el script de Commento en el DOM
        const d = document;
        const s = d.createElement("script");
        s.src = "/js/commento.js";
        s.defer = true; // Utiliza defer para asegurar que el script se cargue correctamente
        (d.head || d.body).appendChild(s);

        return () => {
            // Limpieza al desmontar el componente para evitar duplicación
            if (s.parentNode) {
                s.parentNode.removeChild(s);
            }
            (window as any).COMMENTO = undefined; // Limpia el objeto Commento al desmontar
        };
    }, []);

    return (
        <div id="inject-comments" className="w-full">
            <div id="commento"></div>
        </div>
    );
}

export default BlogComments;
