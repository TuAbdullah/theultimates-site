// /api/send-email.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // نسمح فقط بطلبات POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  try {
    // لو الواجهة ترسل JSON بـ Content-Type: application/json
    const { name, email, phone, company, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ message: "الاسم والبريد والرسالة مطلوبة" });
    }

    // إعداد SMTP عبر Gmail (Workspace) باستخدام App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // مثل: abdullah@theultimates.gg
        pass: process.env.MAIL_PASS, // App Password من Google
      },
    });

    const mailOptions = {
      from: `"The Ultimates Site" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || process.env.MAIL_USER, // يرسل لنفس بريدك افتراضيًا
      subject: `طلب جديد من ${name}`,
      html: `
        <div style="font-family:Tahoma,Arial,sans-serif;direction:rtl;text-align:right">
          <h2>طلب تواصل جديد</h2>
          <p><b>الاسم:</b> ${name}</p>
          <p><b>البريد:</b> ${email}</p>
          <p><b>رقم التواصل:</b> ${phone || "-"}</p>
          <p><b>الشركة/الجهة:</b> ${company || "-"}</p>
          <hr>
          <h3>الرسالة:</h3>
          <p>${(message || "").replace(/\n/g, "<br>")}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "تم إرسال الرسالة بنجاح ✅" });
  } catch (err) {
    console.error("send-email error:", err);
    return res.status(500).json({ message: "تعذر إرسال الرسالة ❌" });
  }
}
