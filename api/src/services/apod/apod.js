import fetch from 'node-fetch';

export const getAPOD = async () => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=fM2nUwf3kG68KhRr8SVSXZgS4b9g3MmBHu5Dkeqv `
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
