module.exports = {
  config: {
    name: 'membercount',
    version: '1.0',
    author: 'KSHITIZ',
    countDown: 5,
    role: 0,
    shortDescription: 'Count group members',
    longDescription: '',
    category: '𝗕𝗢𝗫',
    guide: {
      vi: '   {pn}: dùng để xem số lượng thành viên trong nhóm',
      en: '   {pn}: used to view the number of members in the group',
    },
  },

  run: async function ({ threadsData, api, event, getLang }) {
    const { threadID } = event;
    const threadData = await threadsData.get(threadID);
    const { members } = threadData;

    if (members && members.length > 0) {
      const memberCount = members.length;
      await api.sendMessage(`${getLang('count')} ${memberCount}`, threadID, event.messageID);
    } else {
      await api.sendMessage(getLang('count') + ' 0', threadID, event.messageID);
    }
  },
};
