import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendOTPEmail(
  email: string,
  otp: string,
  name: string,
): Promise<void> {
  
const today = new Date();

const formattedDate = today.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
}).replace(/ /g, "/");

  const mailOptions = {
    from: `"Connect EC" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Connect EC | Your OTP for the Hiring Alignment Test",

    html: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Hiring Alignment Test</title>
</head>

<body style="margin:0;padding:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;">

<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#ffffff;">
<tr>
<td align="center">

<table
width="760"
cellpadding="0"
cellspacing="0"
style="width:760px;max-width:760px;background:#ffffff;">

<!-- ================= HEADER ================= -->

<tr>
<td style="padding:18px 10px 15px 10px;">

<table width="100%">
<tr>

<td align="left">

<img
src="${process.env.BASE_URL}/Connect_EC_Logo.webp"
width="170"
alt="Connect EC"
style="display:block;border:0;"
>

</td>

<td
align="right"
style="
font-size:12px;
color:#444444;
font-weight:400;
">
${formattedDate}
</td>

</tr>
</table>

</td>
</tr>

<!-- Divider -->

<tr>
<td>

<hr
style="
border:none;
border-top:2px solid #d9d9d9;
margin:0;
"
/>

</td>
</tr>

<!-- ================= TITLE ================= -->

<tr>

<td
align="center"
style="padding-top:50px;">

<div
style="
font-size:24px;
font-weight:700;
color:#0668E1;
line-height:1.3;
">
Hiring Alignment Test
</div>

</td>

</tr>

<!-- ================= DESCRIPTION ================= -->

<tr>

<td
style="
padding:35px 0px 0px;
font-size:16px;
line-height:24px;
color:#333333;
font-weight:500;
text-align:left;
">

Discover your hiring alignment through real-world scenarios and gain insights into how your decisions translate into outcomes.
</td>

</tr>

<!-- ================= OTP ================= -->

<tr>

<td
style="
padding:24px 0px 0px;
">

<table
cellpadding="0"
cellspacing="0"
style="
width:180px;
border:2px solid #C1C1C1;
background:#F9F9F9;
border-radius:4px;
">

<tr>

<td
align="center"
style="
padding:8px;
font-size:24px;
font-weight:600;
color:#0668E1;
letter-spacing:3px;
">

${otp}

</td>

</tr>

</table>

</td>

</tr>

<!-- Validity -->

<tr>

<td
style="
padding:8px 0px 0px;
font-size:12px;
color:#9b9b9b;
">

The Code Will be Valid for 10 minutes

</td>

</tr>

<!-- ================= DISCLAIMER ================= -->

<tr>

<td

style="
padding:24px 0px 0px;
font-size:12px;
color:#2C2C2C;
line-height:20px;
text-align: justify;
  text-justify: inter-word;
">

<b>Disclaimer :</b>

The Hiring Alignment Test is designed to provide insights into decision patterns and alignment tendencies across real-world hiring scenarios. The results are intended for self-reflection and professional development purposes and should not be interpreted as definitive assessments of capability, performance, or suitability.
</td>

</tr>

<!-- ================= AUTO GENERATED ================= -->

<tr>

<td
style="
padding:24px 0px;
font-size:12px;
color:#9F9F9F;
">

This is an auto-generated E-mail DO NOT reply

</td>

</tr>

<!-- Divider -->

<tr>

<td>

<hr
style="
border:none;
border-top:2px solid #d9d9d9;
margin:0;
"
/>

</td>

</tr>

<!-- ================= FOOTER ================= -->

<tr>

<td style="padding:20px 10px;">

<table width="100%">

<tr>

<!-- LEFT -->

<td valign="top">

<img
src="${process.env.BASE_URL}/Connect_EC_Logo.webp"
width="170"
alt="Logo"
style="display:block;border:0;"
>

<div
style="
margin-top:8px;
font-size:12px;
color:#9b9b9b;
">
Team Connect EC
</div>

</td>

<!-- RIGHT -->

<td
align="right"
valign="top"
style="
font-size:12px;
color:#2C2C2C;
">

Contact us at :

<a
href="mailto:hello@connectec.app"
style="
color:#0668E1;
text-decoration:none;
">

hello@connectec.app

</a>

<br />

Phone :

+91 9499045851

</td>

</tr>

</table>

</td>

</tr>

</table>

</td>
</tr>
</table>

</body>
</html>`,
  };

  await transporter.verify();
  // console.log("SMTP Connected");

  await transporter.sendMail(mailOptions);
}
