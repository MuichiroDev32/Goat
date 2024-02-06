const { findUid } = global.utils;
const regExCheckURL = /^(http|https):\/\/[^ "]+$/;

module.exports = {
  config: {
    name: "uid",
    version: "1.2",
    author: "NTKhang",
    countDown: 5,
    role: 0,
    shortDescription: "View Facebook UID",
    longDescription: "View Facebook User ID of users",
    category: "info",
    guide: "{pn}: View your Facebook UID\n{pn} @tag: View Facebook UID of tagged people\n{pn} <profile link>: View Facebook UID of profile link\nReply to someone's message with the command to view their Facebook UID",
  },

  run: async function ({ api, event, args }) {
    if (event.messageReply)
      return api.sendMessage(event.messageReply.senderID, event.threadID);
    if (!args[0])
      return api.sendMessage(event.senderID, event.threadID);
    if (args[0].match(regExCheckURL)) {
      let msg = '';
      for (const link of args) {
        try {
          const uid = await findUid(link);
          msg += `${link} => ${uid}\n`;
        } catch (e) {
          msg += `${link} (ERROR) => ${e.message}\n`;
        }
      }
      api.sendMessage(msg, event.threadID);
      return;
    }

    let msg = "";
    const { mentions } = event;
    for (const id in mentions)
      msg += `${mentions[id].replace("@", "")}: ${id}\n`;
    api.sendMessage(msg || "Please tag the person you want to view UID or leave it blank to view your own UID", event.threadID);
  }
};
