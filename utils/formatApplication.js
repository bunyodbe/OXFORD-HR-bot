const moment = require('moment');

function formatApplication(user) {
  let text = `📅 Sana: ${user.date || moment().format('DD/MM/YYYY')}\n`;
  text += `🏷 Soha: ${user.field}`;
  if(user.field === 'teacher') text += ` (${user.subject})`;
  text += `\n1️⃣ FISH: ${user.name}\n2️⃣ Telefon: ${user.phone}\n3️⃣ Yosh: ${user.age}\n4️⃣ Tajriba: ${user.experience}`;
  return text;
}

module.exports = { formatApplication };