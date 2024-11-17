export default function handler(req, res) {
    const { query } = req;
    const { code } = query;

    if (!code) {
        res.status(400).json({ error: "Authorization code missing" });
        return;
    }

    const client_id = process.env.GITHUB_CLIENT_ID;
    const client_secret = process.env.GITHUB_CLIENT_SECRET;

    fetch(`https://github.com/login/oauth/access_token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            client_id,
            client_secret,
            code,
        }),
    })
        .then((response) => response.text())
        .then((paramsString) => {
            const params = new URLSearchParams(paramsString);
            const access_token = params.get("access_token");
            res.status(200).json({ token: access_token });
        })
        .catch((error) => {
            res.status(500).json({
                error: "Failed to fetch access token",
                details: error,
            });
        });
}
