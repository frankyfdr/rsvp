import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const SHEET_ID = process.env.GOOGLE_SHEET_ID; // put in .env.local

export async function POST(req) {
  try {
    // Read the service account JSON from env (base64-decoded)
    const body = await req.json();
    const keyBase64 = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64;
    if (!keyBase64) {
      throw new Error('Missing service account key env var');
    }
    const keyJson = JSON.parse(Buffer.from(keyBase64, 'base64').toString('utf8'));

    // auth client
    const auth = new google.auth.GoogleAuth({
      credentials: keyJson,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.SHEET_ID; // from .env
    const range = 'Invited!A:C'; // where to append — adjust to your sheet & columns
    const values = body.rows.map((row) => [...row, new Date().toISOString()]);
    console.log('Values to append:', values);
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values,
      },
    });

    return Response.json({ ok: true, result: response.data }, { status: 200 });
  } catch (err) {
    console.error('append-invite error:', err);
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}
