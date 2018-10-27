// Initialize Firebase


// Add additional services you want to use

const browse = ["browse/system/caselets-activity",

"browse/system/caselets-main-published",

"browse/system/caselets-snippet-published/all",
"browse/system/caselets-snippet-published/CST-1-corporate-all-sectors",
"browse/system/caselets-snippet-published/CST-1-corporate-enterprises",
"browse/system/caselets-snippet-published/CST-1-corporate-tech-companies",
"browse/system/caselets-snippet-published/CST-2-product-analytics-product-1",
"browse/system/caselets-snippet-published/CST-2-product-customer-service-product-1",
"browse/system/caselets-snippet-published/CST-2-product-device-product-1",
"browse/system/caselets-snippet-published/CST-2-product-digital-app-product",
"browse/system/caselets-snippet-published/CST-2-product-tracking-product-1",
"browse/system/caselets-snippet-published/CST-3-service-big-data-analytics",
"browse/system/caselets-snippet-published/CST-3-service-digital-solutions",
"browse/system/caselets-snippet-published/CST-3-service-infrastructure-engineering",
"browse/system/caselets-snippet-published/CST-3-service-testing",
"browse/system/caselets-snippet-published/CST-3-service-ui-development",
"browse/system/caselets-snippet-published/CST-3-service-ux-design",
"browse/system/caselets-snippet-published/CST-4-domain-agricultural-products",
"browse/system/caselets-snippet-published/CST-4-domain-it-iot-software-services",
"browse/system/caselets-snippet-published/CST-4-domain-it-iot-technology-hardware",
"browse/system/caselets-snippet-published/CST-4-domain-pharma-biotech-and-life-sciences",
"browse/system/caselets-snippet-published/CST-4-domain-retail",
"browse/system/caselets-snippet-published/CST-5-lob-asset-management",
"browse/system/caselets-snippet-published/CST-5-lob-health-safety-sustainability",
"browse/system/caselets-snippet-published/CST-5-lob-iot-operational-technology",
"browse/system/caselets-snippet-published/CST-5-lob-marketing",
"browse/system/caselets-snippet-published/CST-5-lob-sales",
"browse/system/caselets-snippet-published/CST-5-lob-service",
"browse/system/caselets-snippet-published/CST-6-focus-theme-digital",
"browse/system/caselets-snippet-published/CST-6-focus-theme-IoT",
"browse/system/caselets-snippet-published/CST-9-digital-commerce",
"browse/system/caselets-snippet-published/CST-9-giftcertificates-platform-re-engineering",
"browse/system/caselets-snippet-published/CST-9-giftcertificates-platform-reengineering",
];

const manage = ["manage/system/caselets-main-editing",

"manage/system/caselets-snippet-editing/all",
"manage/system/caselets-snippet-editing/CST-1-corporate-all-sectors",
"manage/system/caselets-snippet-editing/CST-1-corporate-enterprises",
"manage/system/caselets-snippet-editing/CST-1-corporate-tech-companies",
"manage/system/caselets-snippet-editing/CST-2-product-analytics-product-1",
"manage/system/caselets-snippet-editing/CST-2-product-customer-service-product-1",
"manage/system/caselets-snippet-editing/CST-2-product-device-product-1",
"manage/system/caselets-snippet-editing/CST-2-product-digital-app-product",
"manage/system/caselets-snippet-editing/CST-2-product-tracking-product-1",
"manage/system/caselets-snippet-editing/CST-3-service-big-data-analytics",
"manage/system/caselets-snippet-editing/CST-3-service-digital-solutions",
"manage/system/caselets-snippet-editing/CST-3-service-infrastructure-engineering",
"manage/system/caselets-snippet-editing/CST-3-service-testing",
"manage/system/caselets-snippet-editing/CST-3-service-ui-development",
"manage/system/caselets-snippet-editing/CST-3-service-ux-design",
"manage/system/caselets-snippet-editing/CST-4-domain-agricultural-products",
"manage/system/caselets-snippet-editing/CST-4-domain-it-iot-software-services",
"manage/system/caselets-snippet-editing/CST-4-domain-it-iot-technology-hardware",
"manage/system/caselets-snippet-editing/CST-4-domain-pharma-biotech-and-life-sciences",
"manage/system/caselets-snippet-editing/CST-4-domain-retail",
"manage/system/caselets-snippet-editing/CST-5-lob-asset-management",
"manage/system/caselets-snippet-editing/CST-5-lob-health-safety-sustainability",
"manage/system/caselets-snippet-editing/CST-5-lob-iot-operational-technology",
"manage/system/caselets-snippet-editing/CST-5-lob-marketing",
"manage/system/caselets-snippet-editing/CST-5-lob-sales",
"manage/system/caselets-snippet-editing/CST-5-lob-service",
"manage/system/caselets-snippet-editing/CST-6-focus-theme-digital",
"manage/system/caselets-snippet-editing/CST-6-focus-theme-IoT",
"manage/system/caselets-snippet-editing/CST-9-digital-commerce",
"manage/system/caselets-snippet-editing/CST-9-giftcertificates-platform-re-engineering",
"manage/system/caselets-snippet-editing/CST-9-giftcertificates-platform-reengineering",
];

const write = [
  
"write/system/writer-caselets-snippet-editing/all",
"write/system/writer-caselets-snippet-editing/CST-1-corporate-all-sectors",
"write/system/writer-caselets-snippet-editing/CST-1-corporate-enterprises",
"write/system/writer-caselets-snippet-editing/CST-1-corporate-tech-companies",
"write/system/writer-caselets-snippet-editing/CST-2-product-analytics-product-1",
"write/system/writer-caselets-snippet-editing/CST-2-product-customer-service-product-1",
"write/system/writer-caselets-snippet-editing/CST-2-product-device-product-1",
"write/system/writer-caselets-snippet-editing/CST-2-product-digital-app-product",
"write/system/writer-caselets-snippet-editing/CST-2-product-tracking-product-1",
"write/system/writer-caselets-snippet-editing/CST-3-service-big-data-analytics",
"write/system/writer-caselets-snippet-editing/CST-3-service-digital-solutions",
"write/system/writer-caselets-snippet-editing/CST-3-service-infrastructure-engineering",
"write/system/writer-caselets-snippet-editing/CST-3-service-testing",
"write/system/writer-caselets-snippet-editing/CST-3-service-ui-development",
"write/system/writer-caselets-snippet-editing/CST-3-service-ux-design",
"write/system/writer-caselets-snippet-editing/CST-4-domain-agricultural-products",
"write/system/writer-caselets-snippet-editing/CST-4-domain-it-iot-software-services",
"write/system/writer-caselets-snippet-editing/CST-4-domain-it-iot-technology-hardware",
"write/system/writer-caselets-snippet-editing/CST-4-domain-pharma-biotech-and-life-sciences",
"write/system/writer-caselets-snippet-editing/CST-4-domain-retail",
"write/system/writer-caselets-snippet-editing/CST-4-domain-transportation",
"write/system/writer-caselets-snippet-editing/CST-5-lob-asset-management",
"write/system/writer-caselets-snippet-editing/CST-5-lob-health-safety-sustainability",
"write/system/writer-caselets-snippet-editing/CST-5-lob-iot-operational-technology",
"write/system/writer-caselets-snippet-editing/CST-5-lob-marketing",
"write/system/writer-caselets-snippet-editing/CST-5-lob-sales",
"write/system/writer-caselets-snippet-editing/CST-6-focus-theme-digital",
"write/system/writer-caselets-snippet-editing/CST-6-focus-theme-IoT",
"write/system/writer-caselets-snippet-editing/CST-9-digital-commerce",
"write/system/writer-caselets-snippet-editing/CST-9-giftcertificates-platform-re-engineering",
"write/system/writer-caselets-snippet-editing/CST-9-giftcertificates-platform-reengineering",
"write/system/writer-caselets-snippet-editing/CST-9-inventory-optimization",
"write/system/writer-caselets-snippet-editing/CST-9-travel-hybris-implementations"

];


var config = {
  apiKey: "AIzaSyDCRN0VvElx8Xos0kf3eYDs576QDCzOJZ4",
  authDomain: "caseletize-demo.firebaseapp.com",
  databaseURL: "https://caseletize-demo.firebaseio.com",
  projectId: "caseletize-demo",
  storageBucket: "caseletize-demo.appspot.com",
  messagingSenderId: "47417023621"
};

firebase.initializeApp(config);

const orgRef = firebase.database().ref('ORG-DITIMICS');

function update(pathArray)
{

if( Array.isArray(pathArray) )
{

  pathArray.map( ( path ) =>{
    orgRef.child(path).once('value').then( function(snap){
      let index = 0 ;
      const object = snap.val();
      snap.forEach( function(child){
        
        const key = Object.keys(object)[index] || {};
        const childObj= child.val() || {};
        const childRef= orgRef.child(`${path}/${key}/identifiers`);
        updateByValue(childRef,childObj.identifiers);
        console.log(key);
        console.log(childObj);
        index++;
      } )
    })
  })
}

  
};

function updateByValue(reference,identifiers)
{

const sortParams= getSortParams(identifiers);

reference.update(sortParams);

}

function getSortParams(identifiers)
{
  
  return {
  "CAT-TIM":          getCAT_TIM(identifiers),
  "TYP-TIM":          getTYP_TIM(identifiers),       
  "CUS-TIM":          getCUS_TIM(identifiers), 
  "CUS-CAT-TIM":      getCUS_CAT_TIM(identifiers),
  "TYP-CAT-TIM":      getTYP_CAT_TIM(identifiers),
  "CUS-TYP-CAT-TIM":  getCUS_CAT_CAT_TIM(identifiers)
}
}

function getCUS_CAT_CAT_TIM(identifiers)
{
  const bignumber = 999999999999999;
  const dateCalc =  bignumber+identifiers.lastUpdated;
let mainString = `${identifiers.CUS}-${identifiers.CAT}-${dateCalc}` 
return mainString;
}

function getTYP_CAT_TIM(identifiers)
{
  const bignumber = 999999999999999;
  const dateCalc =  bignumber+identifiers.lastUpdated;
let mainString = `${identifiers.type}-${identifiers.CAT}-${dateCalc}` 
return mainString;
}

function getCUS_CAT_TIM(identifiers)
{
  const bignumber = 999999999999999;
  const dateCalc =  bignumber+identifiers.lastUpdated;
let mainString = `${identifiers.CUS}-${identifiers.CAT}-${dateCalc}` 
return mainString;
}

function getTYP_TIM(identifiers)
{
  const bignumber = 999999999999999;
  const dateCalc =  bignumber+identifiers.lastUpdated;
let mainString = `${identifiers.type}-${dateCalc}` 
return mainString;
}

function getCUS_TIM(identifiers)
{
  const bignumber = 999999999999999;
  const dateCalc =  bignumber+identifiers.lastUpdated;
let mainString = `${identifiers.CUS}-${dateCalc}` 
return mainString;
}

function getCAT_TIM(identifiers)
{
  const bignumber = 999999999999999;
  const dateCalc =  bignumber+identifiers.lastUpdated;
let mainString = `${identifiers.CAT}-${dateCalc}` 
return mainString;
}



//update(manage); checked

// update(browse); checked

update(write);


// firebase.database().ref('ORG-DITIMICS').child('/manage/system/caselets-main-editing/-KnciSc5XqNLJuhyBdv8/identifiers').update({
//     "CAT-TIM":'CAT-00-9932432432432432423'
//   });
