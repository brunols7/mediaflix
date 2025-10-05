import { geolocation } from "@vercel/functions";

export function GET(request: Request) {
  const geo = geolocation(request);

  console.log("geo", geo);

  return new Response(geo?.country || "US");
}
