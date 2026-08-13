/**
 * Prefija una ruta interna con el `base` de Astro.
 *
 * Hace falta porque el sitio se publica en GitHub Pages de proyecto, que
 * sirve bajo un subdirectorio. Astro NO reescribe las rutas absolutas que
 * se escriben a mano en el marcado: si un enlace dice `/posts`, se queda
 * en `/posts` y da 404 en cuanto hay `base`.
 *
 * Con `base` sin definir, `BASE_URL` vale '/', asi que withBase('/posts')
 * devuelve '/posts' y el comportamiento en local no cambia.
 */
export function withBase(path: string | undefined | null): string {
    const base = (import.meta.env.BASE_URL ?? '/').replace(/\/+$/, '')
    const clean = String(path ?? '').replace(/^\/+/, '')

    return clean ? `${base}/${clean}` : `${base}/`
}
