module.exports = {
  config: {
    name: "kick",
    version: "1.2",
    author: "NTKhang",
    countDown: 5,
    role: 1,
    shortDescription: "Kick member",
    longDescription: "Kick member out of chat box",
    category: "box chat",
    guide: "{pn} @tags: use to kick members who are tagged"
  },

  run: async function ({ api, event, args, threadsData }) {
    const adminIDs = await threadsData.get(event.threadID, "adminIDs");
    if (!adminIDs.includes(api.getCurrentUserID()))
      return api.sendMessage("Please add admin for bot before using this feature", event.threadID);

    async function kickAndCheckError(uid) {
      try {
        await api.removeUserFromGroup(uid, event.threadID);
      } catch (e) {
        return "ERROR";
      }
    }

    if (!args[0]) {
      if (!event.messageReply)
        return api.sendMessage("Syntax error.", event.threadID);
      const result = await kickAndCheckError(event.messageReply.senderID);
      if (result === "ERROR")
        return api.sendMessage("An error occurred. Please try again later.", event.threadID);
    } else {
      const uids = Object.keys(event.mentions);
      if (uids.length === 0)
        return api.sendMessage("Syntax error.", event.threadID);
      const firstUID = uids.shift();
      const result = await kickAndCheckError(firstUID);
      if (result === "ERROR")
        return;
      for (const uid of uids)
        api.removeUserFromGroup(uid, event.threadID);
    }
  }
};
