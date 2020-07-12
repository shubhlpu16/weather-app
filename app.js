// const yargs = require('yargs');
const getGeoCode = require('./utils/geocode');
const getWeatherDetails = require('./utils/weather');

const address=process.argv[2];

if(!address)
{
  console.log("Please Provide address");
}
else {


getGeoCode(address,(response)=>{
  if(response.error)
    return console.error(response.error);
    getWeatherDetails(response.place_details,(responseData)=>{
      if(responseData.error)
      return console.log(responseData.error);
      console.log(response.place_details.location);
      console.log(responseData.data);
    })

  }
)
}
