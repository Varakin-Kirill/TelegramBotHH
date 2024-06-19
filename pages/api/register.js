import kv from "@vercel/kv";

export default async function handler(request, response) {
  const { telegram, ...rest } = request.query;
  await kv.set(telegram, JSON.stringify({ ...rest, telegram }));
  const user = await kv.get(telegram);
  return response.status(200).json(user);
}
