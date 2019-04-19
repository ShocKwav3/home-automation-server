import express from 'express';
let router = express.Router();



router.get('/', (req, res) => {
  console.log('GET YOOOO!')
});


router.post('/', (req, res, next) => {
  console.log('POST YOOOO!')
});

export default router;