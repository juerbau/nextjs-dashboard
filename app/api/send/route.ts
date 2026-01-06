// import { EmailTemplate } from '@/app/ui/mail/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Resend <onboarding@resend.dev>',
            to: 'juerbau@web.de',
            subject: 'Hello world',
            //react: EmailTemplate({ firstName: 'Jürgen' }),
            html: "<h1>Hello Jürgen</h1>",
            text: "Das ist ein Resend Mail-Test"
        });

        if (error) {
            return Response.json({ error: "im if" }, { status: 500 });
        }

        return Response.json(data);
    } catch (err: any) {
        // Manche Fehler werden geworfen (z.B. validation_error)
        return Response.json(
            {
                thrown: true,
                name: err?.name,
                message: err?.message,
                statusCode: err?.statusCode,
                err,
            },
            { status: 500 }
        );
    }
}