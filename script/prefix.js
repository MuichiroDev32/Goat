module.exports = {
  config: {
    name: "prefix",
    version: "1.0",
    author: "kshitiz",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },
  run: async function () {},
  handleEvent: async function ({ api, event, message, getLang, prefix }) {
    if (event.body && event.body.toLowerCase() === "prefix") {
      return api.sendMessage(`🌐 System prefix: ${prefix}\n🛸 Your box chat prefix: ${prefix}`, event.threadID, event.messageID);
    }
  }
};
