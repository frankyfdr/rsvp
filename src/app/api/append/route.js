import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const SHEET_ID = process.env.GOOGLE_SHEET_ID; // put in .env.local

export async function POST(req) {
  try {
    const body = await req.json();
    const { row } = body; // e.g. ["Banana", 25, "2025-08-16"]

    // Load credentials from env (you can also load from JSON file)
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: process.env.GOOGLE_TYPE,
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        auth_uri: process.env.GOOGLE_AUTH_URI,
        token_uri: process.env.GOOGLE_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER,
        client_x509_cert_url: process.env.GOOGLE_CLIENT_CERT_URL,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Append the row
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A:C', // adjust to your sheet/range
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json({ success: true, message: 'Row appended' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
