import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const recipient = 'harshraj13339@gmail.com'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''
    const honeypot = typeof body.website === 'string' ? body.website.trim() : ''

    if (honeypot) return NextResponse.json({ ok: true })
    if (name.length < 2) return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
    if (!emailPattern.test(email)) return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    if (message.length < 10) return NextResponse.json({ error: 'Message must be at least 10 characters.' }, { status: 400 })
    if (name.length > 100 || email.length > 254 || message.length > 5000) return NextResponse.json({ error: 'Please shorten your message.' }, { status: 400 })

    const apiKey = process.env.RESEND_API_KEY
    const from = process.env.RESEND_FROM_EMAIL
    if (!apiKey || !from) return NextResponse.json({ error: 'Email service is not configured yet.' }, { status: 503 })

    const resend = new Resend(apiKey)
    const result = await resend.emails.send({
      from,
      to: [recipient],
      replyTo: email,
      subject: `New Portfolio Contact — ${name}`,
      text: `New message received from your portfolio.\n\nName:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`,
    })

    if (result.error) return NextResponse.json({ error: 'Unable to send your message right now.' }, { status: 502 })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Unable to send your message right now.' }, { status: 500 })
  }
}
