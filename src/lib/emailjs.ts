import emailjs from "@emailjs/browser";

export async function sendLeadNotification(data: {
  name: string;
  phone: string;
  email: string;
}) {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      from_name: data.name,
      phone: data.phone,
      email: data.email || "Not provided",
      to_email: "najpeelcarsales@gmail.com",
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  );
}
