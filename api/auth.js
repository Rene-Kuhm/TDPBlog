export default async function handler(req, res) {
    const { query } = req;
    const { code } = query;

    if (!code) {
        return res.status(400).json({ error: "Authorization code missing" });
    }

    const client_id = process.env.GITHUB_CLIENT_ID;
    const client_secret = process.env.GITHUB_CLIENT_SECRET;

    try {
        const response = await fetch(
            `https://github.com/login/oauth/access_token`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    client_id,
                    client_secret,
                    code,
                }),
            },
        );

        const paramsString = await response.text();
        const params = new URLSearchParams(paramsString);
        const access_token = params.get("access_token");

        if (!access_token) {
            return res
                .status(400)
                .json({ error: "Failed to retrieve access token" });
        }

        res.status(200).json({ token: access_token });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
            details: error.message,
        });
    }
}
