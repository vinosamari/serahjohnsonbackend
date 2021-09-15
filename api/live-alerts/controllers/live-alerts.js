"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.live_alerts.create(data, { files });
    } else {
      entity = await strapi.services.live_alerts.create(ctx.request.body);
      await strapi.plugins["email"].services.email.send({
        to: `${ctx.request.body.email}`,
        subject: `🎉🎉🎉  Hey ${ctx.request.body.name} Let's Bring Your Ideas To Life TODAY! 🎉🎉🎉`,
        text: `Hello ${ctx.request.body.name}, I'm Extremely Happy to Have You Here At The Start of A New Chapter. Our Journey Has Only Just Begun and I'll Be Right Beside You Telling The Story of This Wonderful Experience. Feel Free To Reach Out To Me With Your Ideas & Projects`,
        html: `Welcome ${ctx.request.body.name}, We're Extremely Happy to Have You Join Us! Our Journey Has Only Just Begun.We'll Be Here To Kkary You Along The Whole Way.  .`,
      });
    }
    return sanitizeEntity(entity, { model: strapi.models.live_alerts });
  },
};
