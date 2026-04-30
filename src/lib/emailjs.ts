import emailjs from "@emailjs/browser";

export async function sendLeadNotification(data: {
  name: string;
  phone: string;
  email: string;
  make?: string;
  model?: string;
  minPrice?: string;
  maxPrice?: string;
}) {
  const formatPrice = (p?: string) => {
    if (!p) return "Any";
    const num = Number(p);
    return isNaN(num) ? p : `$${num.toLocaleString()}`;
  };

  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      from_name: data.name,
      phone: data.phone,
      email: data.email || "Not provided",
      make: data.make || "Any Make",
      model: data.model || "Any Model",
      min_price: formatPrice(data.minPrice),
      max_price: formatPrice(data.maxPrice),
      to_email: "najpeelcarsales@gmail.com",
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  );
}
