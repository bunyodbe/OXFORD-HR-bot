const { formatApplication } = require('../utils/formatApplication');

async function sendApplicationToGroup(bot, user, groupId) {
    await bot.telegram.sendMessage(groupId, formatApplication(user));
}

async function sendAdminReply(bot, userId, message) {
    await bot.telegram.sendMessage(userId, `📣 Sizning arizangiz haqida javob:\n${message}`);
}

module.exports = { sendApplicationToGroup, sendAdminReply };