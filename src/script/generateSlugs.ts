const sanityClient = require("@sanity/client");

const client = sanityClient({
    projectId: "m1lc09eu", // Project ID de Sanity
    dataset: "production", // Dataset de Sanity
    apiVersion: "2023-11-16", // Versión de la API
    token: "skMWNx5vtEseTEAQMrxWFzCnkGNbc7HtC5mJeEkAvaH5z4w0U9K2RBP2Qfrlu4R2GYcF8Xue2CgTHNDp8vs18jLNEaPTE11CyrHR4gExkWTmdebqLsKpEgVV37l3tHtS8komOwnzSo7imdJCNrcaxG4HZa9vEdVzguRVf2LH51tGw9YUKDgW", // Token con permisos de escritura
    useCdn: false, // Desactiva CDN para datos en tiempo real
});

const slugify = (input: string): string => {
    return input
        .toLowerCase()
        .replace(/[^\w\s-]/g, "") // Remueve caracteres no permitidos
        .replace(/\s+/g, "-") // Reemplaza espacios con guiones
        .slice(0, 96); // Limita a 96 caracteres
};

const generateSlugs = async () => {
    try {
        const documents = await client.fetch(
            `*[_type == "post" && !defined(slug)]`,
        );
        console.log(`Documentos sin slug encontrados: ${documents.length}`);

        const patches = documents.map(
            (doc: { _id: string; title: string }) => ({
                id: doc._id,
                patch: {
                    set: {
                        slug: { current: slugify(doc.title) },
                    },
                },
            }),
        );

        await client
            .transaction(
                patches.map(
                    (patch: {
                        id: string;
                        patch: { set: { slug: { current: string } } };
                    }) => client.patch(patch.id).set(patch.patch),
                ),
            )
            .commit();

        console.log("Slugs generados y actualizados correctamente.");
    } catch (error:unknown) {
        if (error instanceof Error) {
        console.error("Error generando slugs:", error.message);
    } else {
        console.error("Error generando slugs:", error);
    }
    }
};

generateSlugs();
