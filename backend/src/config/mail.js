export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,

  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },

  secure: false,

  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};
