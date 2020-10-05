import { Request, Response, Router } from "express";

export const router = Router();

router.get("/mensagem", (req: Request, res: Response) => {
  res.json({
    ok: true,
    mensagem: "Tudo ok!",
  });
});

router.post("/mensagem", (req: Request, res: Response) => {
  const body = req.body;

  res.json({
    ok: true,
    body,
  });
});

router.post("/mensagem/:id", (req: Request, res: Response) => {
  const body = req.body;
  const id = req.params.id;

  res.json({
    ok: true,
    body,
  });
});

export default router;
