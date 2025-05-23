let twolettersISO = [
  "AF", "AL", "DZ", "AS", "AD", "AO", "AR", "AM", "AU", "AT", "AZ",
  "BD", "BY", "BE", "BJ", "BO", "BR", "BG", "CA", "CL", "CN", "CO",
  "HR", "CZ", "DK", "EG", "EE", "FI", "FR", "DE", "GR", "HK", "HU",
  "IS", "IN", "ID", "IR", "IQ", "IE", "IL", "IT", "JP", "JO", "KZ",
  "KE", "KR", "KW", "LB", "MY", "MX", "MA", "NL", "NZ", "NG", "NO",
  "PK", "PE", "PH", "PL", "PT", "QA", "RO", "RU", "SA", "RS", "SG",
  "SK", "ZA", "ES", "LK", "SE", "CH", "TW", "TH", "TR", "UA", "AE",
  "GB", "US", "UZ", "VN", "ZW"
];


let isoCountries = {
  AF: "Afghanistan",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AR: "Argentina",
  AM: "Armenia",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BD: "Bangladesh",
  BY: "Belarus",
  BE: "Belgium",
  BJ: "Benin",
  BO: "Bolivia",
  BR: "Brazil",
  BG: "Bulgaria",
  CA: "Canada",
  CL: "Chile",
  CN: "China",
  CO: "Colombia",
  HR: "Croatia",
  CZ: "Czech Republic",
  DK: "Denmark",
  EG: "Egypt",
  EE: "Estonia",
  FI: "Finland",
  FR: "France",
  DE: "Germany",
  GR: "Greece",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran",
  IQ: "Iraq",
  IE: "Ireland",
  IL: "Israel",
  IT: "Italy",
  JP: "Japan",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KR: "South Korea",
  KW: "Kuwait",
  LB: "Lebanon",
  MY: "Malaysia",
  MX: "Mexico",
  MA: "Morocco",
  NL: "Netherlands",
  NZ: "New Zealand",
  NG: "Nigeria",
  NO: "Norway",
  PK: "Pakistan",
  PE: "Peru",
  PH: "Philippines",
  PL: "Poland",
  PT: "Portugal",
  QA: "Qatar",
  RO: "Romania",
  RU: "Russia",
  SA: "Saudi Arabia",
  RS: "Serbia",
  SG: "Singapore",
  SK: "Slovakia",
  ZA: "South Africa",
  ES: "Spain",
  LK: "Sri Lanka",
  SE: "Sweden",
  CH: "Switzerland",
  TW: "Taiwan",
  TH: "Thailand",
  TR: "Turkey",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  US: "United States",
  UZ: "Uzbekistan",
  VN: "Vietnam",
  ZW: "Zimbabwe"
};
let Countries = [];

twolettersISO.forEach(element => {
  let obj = {
    iso_2_alpha: element,
    png: `https://flagcdn.com/32x24/${element.toLowerCase()}.png`,
    countryName: isoCountries[element.toUpperCase()]
  };

  Countries.push(obj);
});

console.log(Countries);
function getCountryName(countryCode){
  if(isoCountries.hasOwnProrperty(countryCode)){
    return isoCountries[countryCode];
  }
  else{
    return countryCode
  }
}

console.log(Countries)
export default Countries;