const router = require('express').Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

const { cardIdValidation, createCardValidation } = require('../middlewares/validation');

router.get('/cards', getCards);

router.post('/cards', createCard, createCardValidation);

router.delete('/cards/:cardId', deleteCard, cardIdValidation);

router.put('/cards/:cardId/likes', likeCard, cardIdValidation);

router.delete('/cards/:cardId/likes', dislikeCard, cardIdValidation);

module.exports = router;
