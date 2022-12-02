import { Router, Request, Response } from "express";

const router =  Router();

router.get('/', (req: Request, res: Response) => {
  let age: number = 15
  let showOld: boolean = false

  if(age > 50) {
    showOld = true
  }
  
  res.render('home', {
    name: 'Rafael',
    lastName: 'Galdino',
    age: 27,
    showOld
  })
})

router.get('/contatos', (req: Request, res: Response) => {
  res.send('Pagina de contatos')
})

router.get('/noticias', (req: Request, res: Response) => {
  res.send('Pagina de noticias')
})

router.get('/sobre', (req: Request, res: Response) => {
  res.send('Pagina de sobre')
})

export default router