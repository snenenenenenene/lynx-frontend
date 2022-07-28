export const addTaxData = () => {
  return [2018, 2019, 2020, 2021, 2022].map((mockYear) => {
    return {
      year: mockYear,
      totalRevenue: Math.floor(Math.random() * 10000000) + 1000,
      averageRevenue: Math.floor(Math.random() * 5000000) + 300000,
    };
  });
};

export const addDecisionData = () => {
  return Array.from(Array(Math.floor(Math.random() * 32) + 10).keys()).map(
    () => {
      return {
        category: [
          'Water',
          'Opvolgende Belastingen',
          'Voertuigen',
          'Milieu',
          'Verkrotting & Leegstand',
          'Riolering',
          'Water',
          'Tucht',
          'Administratie & Vergunningen',
          'Andere',
          'Wegen',
          'Urbanisatiebelastingen',
          'Vuil',
          'Sterfte',
          'Drijfkracht',
          'Grondstoffen',
          'Handel',
          'Vermaak',
          'Taxi',
          'Reclame',
          'Openbare Domein',
          'Tanks & Vergaarbakken',
          'Openbare Hygiene',
          'Verblijf',
          'Prive-wegwijzers',
          'Plaats',
          'Grondstoffen',
          'Strand',
          'Bouwen',
          'Parkeren',
          'Dieren',
        ][Math.floor(Math.random() * 15)],
        document:
          'https://www.vlaanderen.be/beslissing/' +
          Math.floor(Math.random() * 1000) +
          1,
        subcategories: [
          { title: 'Hamster', value: Math.floor(Math.random() * 100) + 1 },
          { title: 'Paard', value: Math.floor(Math.random() * 100) + 1 },
        ],
        total: Math.floor(Math.random() * 10000) + 100,
        date: '11-11-2019',
      };
    }
  );
};

const municipalitiesArr = [
  'Zottegem',
  'Heist-op-den-Berg',
  'Denderleeuw',
  'Schoten',
  'Riemst',

  'Libramont-Chevigny',

  'Houthalen-Helchteren',

  'Beernem',

  'Zwalm',

  'Opglabbeek',

  'Ham',

  'Alken',

  'Staden',

  'Meensel',

  'Houthalen',

  'Aalst',

  'Zaventem',

  'Sint-Pieters-Leeuw',

  'Dendermonde',

  'Genk',

  'Kruibeke',

  'Koksijde',

  'Haaltert',

  'Destelbergen',

  'Putte',

  'Vorst',

  'Oostende',

  'Herstal',

  'Hoogstraten',

  'Lochristi',

  'Eeklo',

  'Kortemark',

  'Sint-Amands',

  'Knesselare',

  'Groot-Bijgaarden',

  'Eksel',

  'Hasselt',

  'Beringen',

  'Beersel',

  'Maaseik',

  'Zonnebeke',

  'Bierbeek',

  'Arendonk',

  'Herselt',

  'Begijnendijk',

  'Tremelo',

  'Vosselaar',

  'Lint',

  'Oostrozebeke',

  'Linkebeek',

  'Schaerbeek',

  'Gent',

  'Sint-Jans-Molenbeek',

  'Leuven',

  'Kortrijk',

  'Turnhout',

  'Ath',

  'Roosdaal',

  'Puurs',

  'Damme',

  'Wemmel',

  'Schilde',

  'Lovendegem',

  'Moerbeke-Waas',

  'Borsbeek',

  'Broechem',

  'Zelzate',

  'Grimbergen',

  'Wevelgem',

  'Lubbeek',

  'Sint-Katelijne-Waver',

  'Hooglede',

  'Vorselaar',

  'Ledegem',

  'Merksem',

  'Houthulst',

  'Bouwel',

  'Erembodegem',

  'Ruddervoorde',

  'Wellen',

  'Brasschaat',

  'Jette',

  'Sint-Agatha-Berchem',

  'Lier',

  'Ranst',

  'Aartselaar',

  'Seneffe',

  'Meulebeke',

  'Deerlijk',

  'Kraainem',

  'Anzegem',

  'Herenthout',

  'Ichtegem',

  'Heverlee',

  'Berchem',

  'Lichtaart',

  'Geel',

  'Kontich',

  'Tienen',

  'Aarschot',

  'Heusden-Zolder',

  'Lebbeke',

  'Bornem',

  'Neerpelt',

  'Sint-Genesius-Rode',

  'Herve',

  'Merksplas',

  'Waasmunster',

  'Oudenburg',

  'Elewijt',

  'Dessel',

  'Ukkel',

  'Laeken',

  'Etterbeek',

  'Booischot',

  'Merchtem',

  'Ixelles',

  'Ieper',

  'Turnhout',

  'Saint-Josse-ten-Noode',

  'Watermael-Boitsfort',

  'Mortsel',

  'Waregem',

  'Londerzeel',

  'Gooik',

  'Veurne',

  'Ninove',

  'Vise',

  'Arlon',

  'Zedelgem',

  'Diest',

  'Limal',

  'Brecht',

  'Boussu',

  'Opwijk',

  'Nazareth',

  'Peer',

  'Leopoldsburg',

  'Wervik',

  'Morlanwelz',

  'Overpelt',

  'Koekelberg',

  'Malle',

  'Steenokkerzeel',

  'Borgerhout',

  'Vilvoorde',

  'Izegem',

  'Rijkevorsel',

  'Knokke-Heist',

  'Lede',

  'Blegny',

  'Essen',

  'Sint-Gillis-Waas',

  'Zwevegem',

  'Tielt-Winge',

  'Gistel',

  'Zonhoven',

  'Herk-de-Stad',

  'Vielsalm',

  'De Haan',

  'Boutersem',

  'Halen',

  'Wichelen',

  'Laakdal',

  'Brussel',

  'Hemiksem',

  'Tervuren',

  'Nieuwerkerken-Aalst',

  'Dilbeek',

  'Sint-Truiden',

  'Deinze',

  'Herent',

  'Kortenberg',

  'Kalmthout',

  'Kampenhout',

  'Wielsbeke',

  'Hulshout',

  'Zandhoven',

  'Boortmeerbeek',

  'Wijnegem',

  'Ardooie',

  'Desselgem',

  'Dilsen',

  'Mons',

  'Nivelles',

  'Sint-Niklaas',

  'Overijsel',

  "Braine-l'Alleud",

  'Edegem',

  'Torhout',

  'Harelbeke',

  'Wezembeek-Oppem',

  'Zulte',

  'Rumst',

  'Oosterzele',

  'Laarne',

  'Libramont',

  'Lint',

  'Bavikhove',

  'Heule',

  'Brugge',

  'Asse',

  'Auderghem',

  'Jabbeke',

  'Duffel',

  'Berlaar',

  'Melle',

  'Hoegaarden',

  'Gavere',

  'Wilrijk',

  'Oostakker',

  'Seraing',

  'Ronse',

  'Blankenberge',

  'Olen',

  'Keerbergen',

  'Schelle',

  'Aubange',

  'Sint-Martens-Latem',

  'Deurne',

  'Ans',

  'Haasrode',

  'Merelbeke',

  'Kasterlee',

  'Huldenberg',

  'Maldegem',

  'Jurbise',

  'Gerpinnes',

  'Haacht',

  'Peruwelz',

  'Waremme',

  'Nevele',

  'Linter',

  'Couvin',

  'Bree',

  'Boom',

  'Kruishoutem',

  'Waarschoot',

  'Erpe-Mere',

  'Berlare',

  'Hoeselt',

  'Lokeren',

  'Geraardsbergen',

  'Zoersel',

  'Beerse',

  'Brakel',

  'Oostkamp',

  'Willebroek',

  'De Panne',

  'Borgloon',

  'Diegem',

  'Baarle-Hertog',

  'Beveren',

  'Moeskroen',

  'Aalter',

  'Westerlo',

  'Temse',

  'Scherpenheuvel-Zichem',

  'Wuustwezel',

  'Bredene',

  'Stabroek',

  'Zoutleeuw',

  'Stekene',

  'Gosselies',

  'Souvret',

  'Engis',

  'Florenville',

  'Haine-Saint-Paul',

  'Woluwe-Saint-Pierre',

  'Braine-le-Comte',

  'Oudenaarde',

  'Mol',

  'Menen',

  'Tongeren',

  'Balen',

  'Mechelen',

  'Charleroi',

  'Halle',

  'Roeselare',

  'Poperinge',

  'Landen',

  'Galmaarden',

  'Grobbendonk',

  'Lessines',

  'Esneux',

  'Assenede',

  'Meerhout',

  'Kessel-Lo',

  'Kermt',

  'Machelen',

  'Forest',

  'Maasmechelen',

  'Dilsen-Stokkem',

  'Hamme',

  'Diksmuide',

  'Rotselaar',

  'Nijlen',

  'Herzele',

  'Boechout',

  'Hamont-Achel',

  'Holsbeek',

  'Zemst',

  'Bonheiden',

  'Mettet',

  'Oud-Turnhout',

  'Bocholt',

  'Sint-Andries',

  'Antwerpen',

  'Waterloo',

  'Zele',

  'Evergem',

  'Wandre',

  'Zwijndrecht',

  'Nieuwpoort',

  'Liedekerke',

  'Ternat',

  'Wommelgem',

  'Enghien',

  'Buggenhout',

  'Herne',

  'Battice',

  'Baudour',

  'Limbourg',

  'Lanklaar',

  'Zellik',

  'Lembeke',

  'Evere',

  'Lommel',

  'Tielt',

  'Marche-en-Famenne',

  'Fleurus',

  'Tessenderlo',

  'Binche',

  'Ganshoren',

  'Kapellen',

  'Kapelle-op-den-Bos',

  'Clavier',

  'Hove',

  'Wingene',

  'Zomergem',

  'Sint-Lievens-Houtem',

  'Zingem',

  'Paal',

  "Sint-Job-in-'t-Goor",

  'Anderlecht',

  'Soignies',

  'Wetteren',

  'Bilzen',

  'Herentals',

  'Lanaken',

  'Bertem',

  'Middelkerke',

  'Diepenbeek',

  'Kinrooi',

  'Kuurne',

  'Lichtervelde',

  'Averbode',

  'Wilsele',

  'Everberg',
];

export const municipality_data = municipalitiesArr.map((mun) => {
  return {
    title: mun,
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  };
});
