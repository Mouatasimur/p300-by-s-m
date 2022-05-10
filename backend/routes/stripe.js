const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
  });

module.exports = router;


//publish key = pk_test_51KxkZKGitNZBcIZEX2UWlreiTBbIxfJWRSqUuat8jZsi9p6pRl9fJlz4cD9ikqPkULWfJ4kyBVcgblYv14EeV1ve00qeJNZ3dB