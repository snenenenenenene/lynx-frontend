# Revenue per category in Antwerpen in 2022

`http://localhost:8000/aggregations/revenue-query?municipality=Antwerpen&year=2022&groupBy=category`

# Revenue per category per year in Antwerpen

`http://localhost:8000/aggregations/revenue-query?municipality=Antwerpen&groupBy=category,year`

# Amount of decisions from Leuven in 2021

`http://localhost:8000/aggregations/decisions-query?municipality=Leuven&year=2021`

# Submission <http://rdf.myexperiment.org/ontologies/base/Submission>

- modified: timestamp
- created: timestamp
- status: <status> (http://lblod.data.gift/concepts/9bd8d86d-bb10-4456-a84e-91e9507c374c)
- createdBy: <bestuureenheden> (http://data.lblod.info/id/bestuurseenheden/ba4d960fe3e01984e15fd0b141028bab8f2b9b240bf1e5ab639ba0d7fe4dc522)
- subject: <SubmissionDocument> (https://aarschot-echo.cipalschaubroeck.be/id/besluiten/d160dfaa-98da-4380-b154-f626a2fef113)
- providedBy: <vendors> (http://data.lblod.info/vendors/14db001d-ea0f-4a8a-8453-c48547347588)
- atLocation: No idea what it is and it doesn't point anywhere
- generated: <form-data> (http://data.lblod.info/form-data/11f9e2b0-9098-11eb-a68e-57065f70db6a)

# Form Data <http://lblod.data.gift/vocabularies/automatische-melding/FormData>

- hasPart: <data-object> (http://data.lblod.info/id/remote-data-objects/018e1bb0-94b3-11ec-b711-ebd518564af2)
- entryInForce: date
- financialYear: int
- passedBy: <Bestuursorganen> (http://data.lblod.info/id/bestuursorganen/75c51c04fe18067f56b8327affb07e0dac7e2890f90b23d2e72d2979946854ba)
- regulationType: <BesluitType> (https://data.vlaanderen.be/id/concept/BesluitType/256bd04a-b74b-4f2a-8f5d-14dda4765af9)
- authenticityType: <AuthenticityType> (http://lblod.data.gift/concepts/72e253512446ff0b48a2430cb4462634ef577040efeb785ee35d32eba1d90e0f)
- taxRateAmount: string | int | float, literally anything
- sessionStartedAtTime: timestamp
- isAbout:<FormDataNode> (http://data.lblod.info/form-data/nodes/ab403e37-a295-470a-9f46-9ba0ecdba364)
- dateNoLongerInForce: date
- chartOfAccount: <MARCode> (http://lblod.data.gift/concepts/a40e97cc9904798ad68be460c49706276100d5434e58e9999b7a4c64303a30e4)
- hasAdditionalTaxRate: bool
- comment: string
- taxRate: doesn't point anywhere
- description: string
- decisionType: <BesluitType> (https://data.vlaanderen.be/id/concept/BesluitType/67378dd0-5413-474b-8996-d992ef81637a)
- datePublication: date
- taxType: <BesluitType> (https://data.vlaanderen.be/id/concept/BesluitType/8597e056-b96d-4213-ad4c-37338f2aaf35)

**Tax type, decision type and regulation type have the same type but probably different grouping?**

# Bestuureenheden <http://data.vlaanderen.be/ns/besluit#Bestuurseenheid>

- werkingsgebied: <werkingsgebied> (http://data.lblod.info/id/werkingsgebieden/62176b3a93e1d8e274770a1c02a8736ab7c4df55ffbf916aea8b18ce28022ea4)
- inProvincie: <werkingsgebied> (http://data.lblod.info/id/werkingsgebieden/a9a0cabd376a2b3a8eb838f15f6aeb1b63ffe49d527598994962e0d15ad2081c)
- topConceptOf: doesn't point anywhere
- prefLabel: string
- label: string
- inScheme: doesn't point anywhere
- classificatie: <BestuureenheidClassificatieCode> (http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/b156b67f-c5f4-4584-9b30-4c090be02fdc)

**Werkingsgebied probably regroups gemeentes, provincies and other stuff?**

# Status (non existent?)

# SubmissionDocument (nothing important)

# Vendors (non existent?)

# FormDataNode (non existent?)

# Bestuursorgaan <http://data.vlaanderen.be/ns/besluit#Bestuursorgaan>

- bindingStart: date
- bindingEinde: date
- prefLabel: string
- classificatie: <BestuurorgaanClassificatieCode\*> (http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/0dbc70ec-6be9-4997-b8e1-11b6c0542382)
- bestuurt: <Bestuureenheden>

# BesluitType (grouped via inScheme = <https://data.vlaanderen.be/id/conceptscheme/BesluitType>)

- prefLabel: string
- inScheme: probably a grouping but no data
- decidableBy: <BestuurseenheidClassificatieCode>

# AuthenticityType <http://mu.semte.ch/vocabularies/ext/AuthenticityType>

- topConceptOf: doesn't point anywhere
- prefLabel: string
- inScheme: doesn't point anywhere

# Werkingsgebied <http://www.w3.org/ns/prov#Location>

- label: string <http://www.w3.org/2000/01/rdf-schema#label> count 579
- prefLabel: string <http://www.w3.org/2004/02/skos/core#prefLabel> count 5 (provinces?)
- werkingsgebiedNiveau: "Provincie" | "Gemeente"
- topConceptOf: separates provincies from gemeentes

# BestuureenheidClassificatieCode <http://mu.semte.ch/vocabularies/ext/BestuurseenheidClassificatieCode>

- inScheme: <http://data.vlaanderen.be/id/conceptscheme/BestuurseenheidClassificatieCode> _# Seems present more often than the class_
- topConceptOf: <"">
- prefLabel: string

# BestuurorgaanClassificatieCode (via inScheme = <http://data.vlaanderen.be/id/conceptscheme/BestuursorgaanClassificatieCode>)

- inScheme: <http://data.vlaanderen.be/id/conceptscheme/BestuursorgaanClassificatieCode>
- topConceptOf: <"">
- prefLabel: string
