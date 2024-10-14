import Router from "@koa/router";

const router = new Router({
    prefix: "./teachers"
});

//all teacher
router.get("/", (ctx) => {
    ctx.body = "ciao, tutto bene?"
});

//find teacher
router.get("/:id", (ctx) => {});

//Add a new teacher
router.post("/", (ctx) => {});

//edit teacher
router.put("/:id", (ctx) => {});

//delete teacher
router.delete("/:id", (ctx) => {});

export default router;