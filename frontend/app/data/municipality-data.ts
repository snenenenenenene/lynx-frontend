import { Decision, Municipality, Tax } from '../../types';

export const generateTaxData: () => Array<Tax> = () => {
  return [2018, 2019, 2020, 2021, 2022].map((mockYear) => {
    return {
      year: mockYear,
      totalRevenue: Math.floor(Math.random() * 10000000) + 1000,
      averageRevenue: Math.floor(Math.random() * 5000000) + 300000,
    };
  });
};

export const generateDecisionData: () => Array<Decision> = () => {
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
        name: 'Besluit van de gemeenteraad van 1 januari 2021 betreffende de belasting op de inwoners van de gemeente',
        body: { aanwezig: 'Lynx team', besluit: 'woorden' },
        date: { begin: '11-11-2019', end: '11-11-2022' },
        accepted: Math.random() > 0.5 ? true : false,
      };
    }
  );
};

const municipalityNames: Array<string> = [
  'Zottegem',
  'Heist-op-den-Berg',
  'Denderleeuw',
  'Schoten',
  'Riemst',
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

  'Sint-Joost-ten-Noode',

  'Watermaal-Bosvoorde',

  'Mortsel',

  'Waregem',

  'Londerzeel',

  'Gooik',

  'Veurne',

  'Ninove',

  'Zedelgem',

  'Diest',

  'Brecht',

  'Opwijk',

  'Nazareth',

  'Peer',

  'Leopoldsburg',

  'Wervik',

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

  'Essen',

  'Sint-Gillis-Waas',

  'Zwevegem',

  'Tielt-Winge',

  'Gistel',

  'Zonhoven',

  'Herk-de-Stad',

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

  'Sint-Niklaas',

  'Overijsel',

  'Edegem',

  'Torhout',

  'Harelbeke',

  'Wezembeek-Oppem',

  'Zulte',

  'Rumst',

  'Oosterzele',

  'Laarne',

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

  'Ronse',

  'Blankenberge',

  'Olen',

  'Keerbergen',

  'Schelle',

  'Sint-Martens-Latem',

  'Deurne',

  'Haasrode',

  'Merelbeke',

  'Kasterlee',

  'Huldenberg',

  'Maldegem',

  'Haacht',

  'Nevele',

  'Linter',

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

  'Oudenaarde',

  'Mol',

  'Menen',

  'Tongeren',

  'Balen',

  'Mechelen',

  'Halle',

  'Roeselare',

  'Poperinge',

  'Landen',
  'Alveringem',
  'Heuvelland',

  'Galmaarden',
  'Sint-Pieters-Woluwe',
  'Grobbendonk',

  'Assenede',

  'Meerhout',

  'Kessel-Lo',

  'Kermt',

  'Machelen',

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

  'Oud-Turnhout',

  'Bocholt',

  'Sint-Andries',

  'Antwerpen',

  'Waterloo',

  'Zele',

  'Evergem',

  'Zwijndrecht',

  'Nieuwpoort',

  'Liedekerke',

  'Ternat',

  'Wommelgem',

  'Enghien',

  'Buggenhout',

  'Herne',

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

  'Hove',

  'Wingene',

  'Zomergem',

  'Sint-Lievens-Houtem',

  'Zingem',

  'Paal',

  "Sint-Job-in-'t-Goor",

  'Anderlecht',

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

export const municipality_data: Array<Municipality> = municipalityNames.map(
  (mun: string) => {
    return {
      title: mun,
      taxData: generateTaxData(),
      decisionData: generateDecisionData(),
    };
  }
);
