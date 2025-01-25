const express = require('express');
const crypto = require('crypto');
const { readFile, writeFile } = require('./utils/fsUtils');
const { 
  authorizateTalker, 
  nameValidation, 
  ageValidation, 
  talkValidation, 
  talkerRate, 
  talkerWatchedAt } = require('./middlewares/validateTalker');
const validateLogin = require('./middlewares/validateLogin');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
  const speakers = await readFile();
  if (!speakers) return res.status(200).json([]);
  res.status(200).json(speakers);
});

app.get('/talker/search', authorizateTalker, async (req, res) => {
  const { q } = req.query;
  const speakers = await readFile();
  const filteredSpeakers = speakers.filter((talker) => talker.name.includes(q));
  if (!filteredSpeakers) return res.status(200).json([]);
  res.status(200).json(filteredSpeakers);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const speakers = await readFile();
  const speaker = speakers.find((talker) => talker.id === Number(id));
  if (!speaker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(speaker);
});

app.post('/login', validateLogin, (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token });
});

app.post('/talker',
  authorizateTalker,
  nameValidation,
  ageValidation,
  talkValidation,
  talkerRate,
  talkerWatchedAt,  
  async (req, res) => {
  const { name, age, talk } = req.body;
  const speakers = await readFile();
  const newTalker = { id: speakers.length + 1, name, age, talk };
  speakers.push(newTalker);
  await writeFile(speakers);
  res.status(201).json(newTalker);
});

function findTalkerIndexById(speakers, id) {
  return speakers.findIndex((talker) => talker.id === Number(id));
}

async function updateTalker(req, res) {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const speakers = await readFile();

  const talkerIndex = findTalkerIndexById(speakers, id);

  if (talkerIndex === -1) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  const newTalker = { id: Number(id), name, age, talk };
  speakers[talkerIndex] = newTalker;

  await writeFile(speakers);
  res.status(200).json(newTalker);
}

app.put('/talker/:id', 
  authorizateTalker,
  nameValidation,
  ageValidation,
  talkValidation,
  talkerRate,
  talkerWatchedAt,
  async (req, res) => {
    try {
      await updateTalker(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }); 

  app.delete('/talker/:id', authorizateTalker, async (req, res) => {
    const { id } = req.params;
    const speakers = await readFile();
    const talkerIndex = speakers.findIndex((talker) => talker.id === Number(id));
    speakers.splice(talkerIndex, 1);
    await writeFile(speakers);
    res.status(204).json();
  }); 

app.listen(PORT, () => {
  console.log('Online');
});
