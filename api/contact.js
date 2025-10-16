// /api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // السماح فقط بطلبات POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "الطريقة غير مسموحة" });
  }

  const { name, email, company, phone, message } = req.body || {};

  // تحقّق بسيط من الحقول المطلوبة
  if (!name || !email || !message) {
    return res.status(400).json({ error: "الاسم، البريد والرسالة مطلوبة" });
  }

  try {
    // قراءة متغيّرات البيئة من Vercel (Project → Settings → Environment Variables)
    const host   = process.env.NODEMAILER_HOST;     // مثلاً: smtp.gmail.com
    const port   = Number(process.env.NODEMAILER_PORT || 465);
    const secure = String(process.env.NODEMAILER_SECURE || "true") === "true"; // true إذا 465
    const user   = process.env.NODEMAILER_USER;     // الإيميل المرسل
    const pass   = process.env.NODEMAILER_PASS;     // App Password
    const to     = process.env.CONTACT_TO || user;  // بريد الاستقبال

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    // محتوى الرسالة
    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.8; color:#111">
        <h2>رسالة جديدة من نموذج الموقع</h2>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>البريد:</strong> ${email}</p>
        <p><strong>الشركة:</strong> ${company || "-"}</p>
        <p><strong>الهاتف:</strong> ${phone || "-"}</p>
        <p><strong>الرسالة:</strong></p>
        <pre style="white-space:pre-wrap;border:1px solid #eee;padding:12px;border-radius:8px;background:#fafafa">${message}</pre>
      </div>
    `;

    await transporter.sendMail({
      from: `"Website" <${user}>`,
      to,
      replyTo: email,
      subject: `رسالة تواصل جديدة - ${name}`,
      text: `الاسم: ${name}\nالبريد: ${email}\nالشركة: ${company || "-"}\nالهاتف: ${phone || "-"}\n\nالرسالة:\n${message}`,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "تعذّر إرسال الرسالة، جرّب لاحقاً." });
  }
}
