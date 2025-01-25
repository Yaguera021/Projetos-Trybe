const fs = require('fs').promises;
const path = require('path');

const fileName = '../talker.json';
const filePath = path.join(__dirname, fileName);

const readFile = async () => {
  const speakers = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(speakers);
};

const writeFile = async (speakers) => {
  const newSpeaker = await fs.writeFile(filePath, JSON.stringify(speakers));
  return newSpeaker;
};

module.exports = {
  readFile,
  writeFile,
};