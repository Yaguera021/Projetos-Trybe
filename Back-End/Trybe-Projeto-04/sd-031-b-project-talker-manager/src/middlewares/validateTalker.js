const authorizateTalker = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });

  if (authorization.length !== 16 || typeof authorization !== 'string') {
    return res.status(401).json({ message: 'Token inválido' });
  } 

  next();
};

const nameValidation = (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });

  if (name.length < 3) { 
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' }); 
  }

  next();
};

const ageValidation = (req, res, next) => {
  const { age } = req.body;

  if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' });

  if (!Number.isInteger(age) || age < 18) {
    return res.status(400).json({ 
      message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' });
  } 

  next();
};

const talkValidation = (req, res, next) => {
  const { talk } = req.body;

  if (!talk) return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  next();
};

const talkerRate = (req, res, next) => {
  const { talk } = req.body;
  const integer = Number.isInteger(talk.rate);
  if (talk.rate === undefined) {
  return res.status(400).json({ 
    message: 'O campo "rate" é obrigatório' }); 
}

  if (talk.rate <= 0 || talk.rate > 5 || !integer) {
    return res.status(400).json({ 
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
  }
  next();
};

const talkerWatchedAt = (req, res, next) => {
  const { talk } = req.body;
  const regex = /\d{2}\/\d{2}\/\d{4}/;
  if (!talk.watchedAt) {
    return res.status(400).json({
      message: 'O campo "watchedAt" é obrigatório',
    });
  }
  if (!regex.test(talk.watchedAt)) {
    return res.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
  next();
};

module.exports = {
  authorizateTalker,
  nameValidation,
  ageValidation,
  talkValidation,
  talkerRate,
  talkerWatchedAt,
};