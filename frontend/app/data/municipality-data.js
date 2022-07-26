export const addTaxData = () => {
  return [2018, 2019, 2020, 2021, 2022].map((minecraft) => {
    return {
      year: minecraft,
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
          'Dieren',
          'Paardenfluisteres',
          'Transport',
          'Infrastructure',
          'Gasboetes',
        ][Math.floor(Math.random() * 5)],
        change: 'https://www.minecraft.net',
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

export const municipality_data = [
  {
    title: 'Zottegem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Heist-op-den-Berg',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Denderleeuw',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Schoten',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lasne',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Riemst',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Libramont-Chevigny',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Houthalen-Helchteren',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Beernem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Zwalm',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Opglabbeek',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ham',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Chastre',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Alken',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Staden',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Meensel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Houthalen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Aalst',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Zaventem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Sint-Pieters-Leeuw',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Dendermonde',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Genk',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Meise',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Eupen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Kruibeke',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Koksijde',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Haaltert',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Grez-Doiceau',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Hoeilaart',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Villers-la-Ville',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Destelbergen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Putte',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Vorst',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Oostende',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Herstal',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Hoogstraten',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Saint-Ghislain',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lochristi',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wanze',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Mont-Saint-Guibert',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Eeklo',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lennik',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Farciennes',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Hechtel-Eksel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Milmort',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Kortemark',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Sint-Amands',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Knesselare',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Groot-Bijgaarden',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Eksel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Hasselt',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Beringen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Beersel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Gembloux',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lummen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Andenne',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Hannut',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Thuin',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Maaseik',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Awans',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Zonnebeke',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Bierbeek',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Arendonk',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Herselt',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Begijnendijk',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Tremelo',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Vosselaar',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lint',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Oostrozebeke',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Tarcienne',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Messancy',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Linkebeek',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Schaerbeek',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ghent',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Sint-Jans-Molenbeek',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Leuven',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Verviers',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Kortrijk',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Turnhout',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ath',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Roosdaal',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'La Hulpe',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Puurs',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ciney',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Damme',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wemmel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Schilde',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Leuze-en-Hainaut',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Saint Vith',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lovendegem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Moerbeke-Waas',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Borsbeek',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Spa',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Broechem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Jumet',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Marcinelle',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Zelzate',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ottignies-Louvain-la-Neuve',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Grimbergen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wevelgem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lubbeek',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Sint-Katelijne-Waver',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Malmedy',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Hooglede',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Bassenge',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Harze',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Vorselaar',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ledegem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Merksem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Houthulst',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Bouwel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Erembodegem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ruddervoorde',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Fl√©malle-Grande',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wellen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Brasschaat',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Jette',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Sint-Agatha-Berchem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lier',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Huy',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ranst',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Flemalle',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Beauvechain',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Aartselaar',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Seneffe',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Meulebeke',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Meeuwen-Gruitrode',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Deerlijk',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Kraainem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Anzegem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Herenthout',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ichtegem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Heverlee',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Berchem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lichtaart',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Geel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Kontich',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Tienen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Aarschot',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Jodoigne',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Heusden-Zolder',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lebbeke',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Bornem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Neerpelt',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Sint-Genesius-Rode',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Herve',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Merksplas',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Waasmunster',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Oudenburg',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Elewijt',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Dessel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Uccle',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Laeken',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Etterbeek',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Booischot',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Chatelet',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Roeulx',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Merchtem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ixelles',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ypres',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Tournai',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Saint-Josse-ten-Noode',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Watermael-Boitsfort',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Mortsel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Waregem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Londerzeel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Gooik',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Veurne',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ninove',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Vise',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Arlon',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Zedelgem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Diest',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Limal',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Brecht',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Boussu',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Opwijk',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Nazareth',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Peer',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Chievres',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Pont-a-Celles',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Leopoldsburg',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wervik',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Morlanwelz',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Overpelt',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Koekelberg',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Malle',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Hornu',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Steenokkerzeel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Borgerhout',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Affligem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wegnez',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ingelmunster',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Handzame',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ghlin',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Tubize',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Vilvoorde',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Izegem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Courcelles',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Virton',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Rijkevorsel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Knokke-Heist',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lede',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Blegny',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Essen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Sint-Gillis-Waas',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Zwevegem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Tielt-Winge',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Gistel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Zonhoven',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Herk-de-Stad',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Vielsalm',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'De Haan',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Boutersem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Halen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wichelen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Laakdal',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Brussel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Hemiksem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Namur',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Gilly',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wavre',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Alleur',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Tervuren',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Nieuwerkerken-Aalst',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Dilbeek',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Sint-Truiden',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Deinze',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Herent',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Kortenberg',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Kalmthout',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Kampenhout',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wielsbeke',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Hulshout',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Zandhoven',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Boortmeerbeek',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wijnegem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ardooie',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Desselgem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Dilsen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Mons',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Nivelles',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Sint-Niklaas',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Overijse',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: "Braine-l'Alleud",
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Edegem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Torhout',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Sambreville',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Harelbeke',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wezembeek-Oppem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Bastogne',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Zulte',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Rumst',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Oosterzele',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Laarne',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Libramont',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lint',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Bavikhove',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Heule',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: '(not set)',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Brugge',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Asse',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Auderghem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Jabbeke',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Duffel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Berlaar',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Eghezee',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lille',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Melle',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Hoegaarden',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Gavere',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wilrijk',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Oostakker',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Seraing',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ronse',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Jemeppe-sur-Sambre',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: "Fontaine-l'Eveque",
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ham-sur-Heure-Nalinnes',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Blankenberge',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Chaumont-Gistoux',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Olen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Keerbergen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Schelle',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Aubange',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Sint-Martens-Latem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Deurne',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ans',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Haasrode',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Merelbeke',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Kasterlee',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Huldenberg',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Maldegem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Jurbise',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Gerpinnes',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Haacht',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Peruwelz',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Waremme',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Nevele',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Linter',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Couvin',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Bree',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Boom',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Kruishoutem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Waarschoot',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Montigny-le-Tilleul',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Erpe-Mere',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Berlare',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Hoeselt',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Woluwe-Saint-Lambert',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lokeren',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Geraardsbergen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Zoersel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Beerse',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Brakel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Oostkamp',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Willebroek',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Walcourt',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Aywaille',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Dinant',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'De Panne',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Profondeville',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Aubange',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Borgloon',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Diegem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Saint-Gilles',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Baarle-Hertog',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Beveren',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Mouscron',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Aalter',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Westerlo',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Temse',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Scherpenheuvel-Zichem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Manage',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wuustwezel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Bredene',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Stabroek',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Frameries',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Zoutleeuw',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Stekene',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Colfontaine',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Oupeye',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Petit-Rechain',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Gosselies',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Souvret',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Engis',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Florenville',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Haine-Saint-Paul',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Woluwe-Saint-Pierre',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Braine-le-Comte',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Oudenaarde',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Mol',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Chapelle-lez-Herlaimont',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Menen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Tongeren',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Balen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Retie',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Soumagne',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Mechelen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Charleroi',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Halle',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Roeselare',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Poperinge',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Landen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Quaregnon',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Galmaarden',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Grobbendonk',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lessines',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Esneux',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Assenede',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Meerhout',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Kessel-Lo',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Kermt',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Machelen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Forest',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Maasmechelen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Dilsen-Stokkem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Hamme',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Diksmuide',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Rotselaar',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Nijlen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Herzele',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Boechout',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Hamont-Achel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Holsbeek',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Zemst',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Bonheiden',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Mettet',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Oud-Turnhout',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Bocholt',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Sint-Andries',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Antwerpen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
    decisions: [
      {
        code: 'MAR3232',
        category: 'Afval',
        change: 'dasdas',
        date: '2020-01-01',
      },
      {
        code: 'MAR3233',
        category: 'Paardenfluisteraars',
        change: '-423689 euri',
        date: '2042-01-01',
      },
      {
        code: 'MAR3245',
        category: 'Hamsters',
        change: '+439 euri',
        date: '2190-02-01',
      },
    ],
  },
  {
    title: 'Waterloo',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Zele',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Evergem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wandre',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Zwijndrecht',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Nieuwpoort',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Liedekerke',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Chaudfontaine',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Amay',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ternat',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wommelgem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Enghien',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Buggenhout',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Herne',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Battice',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Baudour',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Limbourg',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lanklaar',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Zellik',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lembeke',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Malmedy',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Liege',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Evere',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'La Louviere',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lommel',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Tielt',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Marche-en-Famenne',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Fleurus',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Tessenderlo',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Binche',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Ganshoren',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Kapellen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Kapelle-op-den-Bos',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Clavier',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Hove',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wingene',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Zomergem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Sint-Lievens-Houtem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Zingem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Paal',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: "Sint-Job-in-'t-Goor",
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Anderlecht',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Soignies',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wetteren',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Bilzen',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Herentals',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lanaken',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Bertem',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Middelkerke',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Grace-Hollogne',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Sprimont',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Diepenbeek',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Kinrooi',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Kuurne',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Yvoir',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Lichtervelde',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Saintes',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Jambes',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Boncelles',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Averbode',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Wilsele',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
  {
    title: 'Everberg',
    taxData: addTaxData(),
    decisionData: addDecisionData(),
  },
];
