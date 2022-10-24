// file for detecting incoming delta signals
// Here we define what happens on what signal
// https://github.com/mu-semtech/delta-notifier

export default [
    {
      match: {
        subject: {},
      },
      callback: {
        url: "http://resources/.mu/delta",
        method: "POST",
      },
      options: {
        resourceFormat: "v0.0.1",
        gracePeriod: 250,
        ignoreFromSelf: true,
      },
    },
  
    // we want to catch the dataSource predicate and fire a POST request to our tika service whenever it is catched
    {
      match: {
        predicate: {
          value: "http://www.semanticdesktop.org/ontologies/2007/01/19/nie#dataSource"
        },
      },
      callback: {
        url: "http://tika-text-extractor/delta",
        method: "POST",
      },
      options: {
        resourceFormat: "v0.0.1",
        gracePeriod: 250,
        ignoreFromSelf: true,
      },
    },
  
  ];
  