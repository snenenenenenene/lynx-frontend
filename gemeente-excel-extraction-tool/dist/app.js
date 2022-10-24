"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
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
app.use(cors({
    origin: "*",
}));
app.use(body_parser_1.default.json());
app.set("view engine", "jade");
app.get("/municipality/:mun_name/besluiten", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mun_name } = req.params;
    let query = { selector: { municipality: mun_name } };
    yield besluitendb.find(query, (err, body, header) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send(body);
        }
    });
}));
app.get("/besluiten/:besluit_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { besluit_id } = req.params;
    console.log(besluit_id);
    yield besluitendb
        .get(besluit_id, (err, body, header) => {
        console.log(body);
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send(body);
        }
    })
        .catch((err) => {
        console.log(err);
    });
}));
app.post("/municipality/:mun_name/besluiten", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mun_name } = req.params;
    console.log("WAWA");
    const beslissing = req.body;
    console.log(beslissing);
    besluitendb.insert({
        municipality: mun_name.toLowerCase(),
        name: beslissing.name,
        body: beslissing.body,
        accepted: beslissing.accepted,
        vote: beslissing.vote,
    }, null, (err, body) => {
        if (err) {
            console.log(err);
        }
        else {
            emaildb.find({ selector: { municipality: mun_name.toLowerCase() } }, (err, body, header) => {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    console.log(body);
                    body.docs.map((doc) => __awaiter(void 0, void 0, void 0, function* () {
                        yield transporter.sendMail({
                            from: "vo.abb.test@gmail.com",
                            to: doc.email,
                            subject: "Hello ✔",
                            text: "Hello world?",
                            html: `<b>Hello world?</b><p>Dit is een melding voor de gemeente ${mun_name.toLowerCase()}</p><p>Er is een nieuw besluit toegevoegd!!</p>`,
                        });
                        console.log(doc);
                    }));
                    res.send(body);
                }
            });
            res.send("Besluit is toegevoegd aan de database");
        }
    });
}));
app.post("/municipality/:municipality/subscribe/", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const municipality = req.params.municipality;
        const email = req.body.email;
        yield transporter.sendMail({
            from: "vo.abb.test@gmail.com",
            to: email,
            subject: "Hello ✔",
            text: "Hello world?",
            html: `<b>Hello world?</b><p>Dit is een melding voor de gemeente ${municipality.toLowerCase()}</p>`,
        });
        emaildb.insert({
            email: email,
            municipality: municipality.toLowerCase(),
        }, null, (err, body) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send("Email is toegevoegd aan de database");
            }
        });
    });
});
app.get("/*", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let gemeente = req.query["gemeente"];
            let query = req.params[0].split("/")[0] + "/" + req.params[0].split("/")[1];
            let data = yield JSON.parse(fs.readFileSync(`./formatted_data/${query}.json`));
            if (gemeente) {
                if (Array.isArray(gemeente)) {
                    let entries = [];
                    entries = gemeente.map((g) => {
                        return data.filter((e) => {
                            return e.Gemeente === g;
                        });
                    });
                    return res.json({ Response: entries });
                }
                else {
                    let entry = data.filter((e) => {
                        return e.Gemeente === gemeente;
                    });
                    return res.json({ Response: entry });
                }
            }
            return res.json({ Response: data });
        }
        catch (error) {
            console.log(error);
            return res.json({ Response: error });
        }
    });
});
// error handler
app.use(function (err, req, res, next) {
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
