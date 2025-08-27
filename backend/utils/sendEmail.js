import nodemailer from "nodemailer";

export const sendEmail = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // smtp.gmail.com
    port: Number(process.env.SMTP_PORT), // 465 or 587
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${process.env.SMTP_MAIL}>`, // Gmail mandatory, but name dikh jaayega
    to: process.env.SMTP_MAIL,                   // aapka inbox
    replyTo: email,                              // reply button se user ke email par jayega
    subject: "FREE Fusion GYM",
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<h3>New contact</h3>
           <p><b>Name:</b> ${name}</p>
           <p><b>Email:</b> ${email}</p>
           <p><b>Message:</b><br/>${message}</p>`,
  });
};
