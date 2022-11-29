import { Router, Request, Response } from "express";

const router =  Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Home do site')
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