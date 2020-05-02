const Chance = require('chance');
const OTPs = require('./../app/api/models/OTPs');
const User = require('./../app/api/models/User');
const { sendSms } = require('./smsProvider');
const chance = new Chance();

module.exports = {
  async generateOTP(phoneNumber) {
    const code = chance.string({
      length: 4,
      pool: '0123456789',
    });
    await OTPs.destroy({
      where: {
        associatedPhoneNumber: phoneNumber,
      },
    });
    const otp = await OTPs.create({
      code,
      associatedPhoneNumber: phoneNumber,
    });
    await sendSms(phoneNumber, `Bienvenue sur Daan Covid19 votre code est: ${code}`);
    return otp;
  },

  async verifyOtp({ code, phone}) {
    const exist = await OTPs.findAll({
      where: {
        associatedPhoneNumber: phone,
        code
      },
    });
    if (exist && exist.length) {
      await OTPs.destroy({
        where: {
          associatedPhoneNumber: phone,
        },
      });
      User.update(
        { active: 'active' },
        {
          where: {
            phone,
          },
        },
      );
      return true;
    }
    return false;
  }
}

