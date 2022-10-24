import bodyParser from "body-parser";
import { MangoQuery } from "nano";

var express = require("express");
const fs = require("fs");
const cors = require("cors");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vo.abb.test@gmail.com",
    pass: "vqlsdwigturcehqx",
  },
});

const nano = require("nano")("http://admin:admin@localhost:5984");
nano.db.create("besluitendb");
nano.db.create("emaildb");
const besluitendb = nano.db.use("besluitendb");
const emaildb = nano.db.use("emaildb");

var app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.set("view engine", "jade");

app.get("/municipality/:mun_name/besluiten", async (req: any, res: any) => {
  const { mun_name } = req.params;
  let query: MangoQuery = { selector: { municipality: mun_name } };
  await besluitendb.find(query, (err: any, body: any, header: any) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(body);
    }
  });
});

app.get("/besluiten/:besluit_id", async (req: any, res: any) => {
  const { besluit_id } = req.params;
  console.log(besluit_id);
  await besluitendb
    .get(besluit_id, (err: any, body: any, header: any) => {
      console.log(body);
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(body);
      }
    })
    .catch((err: any) => {
      console.log(err);
    });
});

app.post("/municipality/:mun_name/besluiten", async (req: any, res: any) => {
  const { mun_name }: any = req.params;
  console.log("WAWA");
  const beslissing: any = req.body;
  console.log(beslissing);
  besluitendb.insert(
    {
      municipality: mun_name.toLowerCase(),
      name: beslissing.name,
      body: beslissing.body,
      accepted: beslissing.accepted,
      vote: beslissing.vote,
    },
    null,
    (err: any, body: any) => {
      if (err) {
        console.log(err);
      } else {
        emaildb.find(
          { selector: { municipality: mun_name.toLowerCase() } },
          (err: any, body: any, header: any) => {
            if (err) {
              res.status(500).send(err);
            } else {
              console.log(body);
              body.docs.map(async (doc: any) => {
                await transporter.sendMail({
                  from: "vo.abb.test@gmail.com",
                  to: doc.email,
                  subject: "Hello ✔",
                  text: "Hello world?",
                  html: `<b>Hello world?</b><p>Dit is een melding voor de gemeente ${mun_name.toLowerCase()}</p><p>Er is een nieuw besluit toegevoegd!!</p>`,
                });
                console.log(doc);
              });

              res.send(body);
            }
          }
        );
        res.send("Besluit is toegevoegd aan de database");
      }
    }
  );
});

app.post(
  "/municipality/:municipality/subscribe/",
  async function (req: any, res: any, next: any) {
    const municipality = req.params.municipality;
    const email = req.body.email;

    await transporter.sendMail({
      from: "vo.abb.test@gmail.com",
      to: email,
      subject: "Hello ✔",
      text: "Hello world?",
      html: `<b>Hello world?</b><p>Dit is een melding voor de gemeente ${municipality.toLowerCase()}</p>`,
    });

    emaildb.insert(
      {
        email: email,
        municipality: municipality.toLowerCase(),
      },
      null,
      (err: any, body: any) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Email is toegevoegd aan de database");
        }
      }
    );
  }
);

app.get("/*", async function (req: any, res: any, next: any) {
  try {
    let gemeente: any = req.query["gemeente"];
    let query = req.params[0].split("/")[0] + "/" + req.params[0].split("/")[1];
    let data = await JSON.parse(
      fs.readFileSync(`./formatted_data/${query}.json`)
    );
    if (gemeente) {
      if (Array.isArray(gemeente)) {
        let entries: any = [];
        entries = gemeente.map((g: any) => {
          return data.filter((e: any) => {
            return e.Gemeente === g;
          });
        });

        return res.json({ Response: entries });
      } else {
        let entry = data.filter((e: any) => {
          return e.Gemeente === gemeente;
        });
        return res.json({ Response: entry });
      }
    }
    return res.json({ Response: data });
  } catch (error) {
    console.log(error);
    return res.json({ Response: error });
  }
});

// error handler
app.use(function (err: any, req: any, res: any, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => {
  console.log(`Timezones by location application is running on port ${PORT}.`);
});

module.exports = app;
