export default async function handler(req, res) {
  const { method, body } = req;

  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Accept, Origin"
  );

  if (method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    // Extract the path from the request URL
    // Handle both /api/proxy/signIn and /api/proxy/dbHandling
    let path = req.url;

    // Remove the /api/proxy prefix
    if (path.startsWith("/api/proxy")) {
      path = path.replace("/api/proxy", "");
    }

    // Ensure path starts with /
    if (!path.startsWith("/")) {
      path = "/" + path;
    }

    const apiUrl = `https://uqzl6jyqvg.execute-api.ap-south-1.amazonaws.com/dev${path}`;

    console.log(`Proxying ${method} request to: ${apiUrl}`);
    console.log(`Request body:`, body);

    const fetchOptions = {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    // Add body for non-GET requests
    if (method !== "GET" && body) {
      fetchOptions.body = JSON.stringify(body);
    }

    const response = await fetch(apiUrl, fetchOptions);

    console.log(`Response status: ${response.status}`);
    console.log(
      `Response headers:`,
      Object.fromEntries(response.headers.entries())
    );

    // Check if response is JSON
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      console.log(`Response data:`, data);
      res.status(response.status).json(data);
    } else {
      // Handle non-JSON responses
      const text = await response.text();
      console.log(`Response text:`, text);
      res.status(response.status).send(text);
    }
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({
      error: error.message,
      message: "Failed to proxy request to AWS API Gateway",
      details: {
        method,
        url: req.url,
        body: body,
      },
    });
  }
}
