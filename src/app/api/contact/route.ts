import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json()

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
        }

        const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
        const toEmail = process.env.RESEND_TO_EMAIL || 'your@email.com'

        const emailResponse = await resend.emails.send({
            from: `Portfolio Contact <${fromEmail}>`,
            to: [toEmail],
            subject: `New message from ${name}`,
            replyTo: email,
            html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
        })

        // Log the response for debugging
        console.log('Resend API response:', emailResponse)

        // Check for errors in the response
        if (emailResponse.error) {
            return NextResponse.json({ error: emailResponse.error.message || 'Failed to send email' }, { status: 500 })
        }

        return NextResponse.json({ success: true, data: emailResponse })
    } catch (err) {
        console.error('Error sending email:', err)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }
}
