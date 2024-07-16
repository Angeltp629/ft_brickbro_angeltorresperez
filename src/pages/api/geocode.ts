import type { NextApiRequest, NextApiResponse } from 'next';

// Llamada a la API de Google Geocode para obtener lat y lng

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query;
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`);
  const data = await response.json();

  if (data.status === 'OK') {
    const location = data.results[0].geometry.location;
    res.status(200).json({ location });
  } else {
    res.status(400).json({ error: data.error_message });
  }
}
