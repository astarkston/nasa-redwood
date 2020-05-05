import fetch from 'node-fetch';

export const getAPOD = async () => {
  console.info(JSON.stringify(process.env));
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.REDWOOD_ENV_APIKEY}`
  );

  const json = await response.json();
  console.info(JSON.stringify(json));

  return json;
  // return {
  //   date: new Date().toISOString(),
  //   explanation: 'explanation',
  //   media_type: 'media_type',
  //   service_version: 'service_version',
  //   title: 'title',
  //   url: 'url'
  // };
};
