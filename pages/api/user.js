import kv from "@vercel/kv";

export default async function handler(request, response) {
  const { telegram } = request.query;
  const user = await kv.get(telegram);
  return response.status(200).json(user);
}
