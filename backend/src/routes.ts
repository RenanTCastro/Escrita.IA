const router = express.Router();

router.get("/", function (req: any, res: any) {
  res.send("TESTE");
});

module.exports = router;