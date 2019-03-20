const contentCards = [
    "write/system/content-cards-snippet-editing/all",
"write/system/content-cards-snippet-editing/CST-1-corporate-all-sectors",
"write/system/content-cards-snippet-editing/CST-1-corporate-enterprises",
"write/system/content-cards-snippet-editing/CST-2-product-analytics-product-1",
"write/system/content-cards-snippet-editing/CST-2-product-device-product-1",
"write/system/content-cards-snippet-editing/CST-2-product-digital-app-product",
"write/system/content-cards-snippet-editing/CST-2-product-testing-proudct-1",
"write/system/content-cards-snippet-editing/CST-2-product-tracking-product-1",
"write/system/content-cards-snippet-editing/CST-3-service-big-data-analytics",
"write/system/content-cards-snippet-editing/CST-3-service-digital-solutions",
"write/system/content-cards-snippet-editing/CST-3-service-infrastructure-engineering",
"write/system/content-cards-snippet-editing/CST-3-service-testing",
"write/system/content-cards-snippet-editing/CST-3-service-ui-development",
"write/system/content-cards-snippet-editing/CST-4-domain-retail",
"write/system/content-cards-snippet-editing/CST-4-domain-transportation",
"write/system/content-cards-snippet-editing/CST-4-domain-utilities",
"write/system/content-cards-snippet-editing/CST-5-lob-asset-management",
"write/system/content-cards-snippet-editing/CST-5-lob-information-technology",
"write/system/content-cards-snippet-editing/CST-5-lob-marketing",
"write/system/content-cards-snippet-editing/CST-5-lob-sales",
"write/system/content-cards-snippet-editing/CST-5-lob-service",
"write/system/content-cards-snippet-editing/CST-5-lob-supply-chain-procurement",
"write/system/content-cards-snippet-editing/CST-6-focus-theme-digital",
"write/system/content-cards-snippet-editing/CST-9-digital-commerce",
"write/system/content-cards-snippet-editing/CST-9-gc-platform-re-engineering",
"write/system/content-cards-snippet-editing/CST-9-gemini-national-grid-transco",
"write/system/content-cards-snippet-editing/CST-9-giftcertificates-platform-re-engineering",
"write/system/content-cards-snippet-editing/CST-9-inventory-optimization",
"write/system/content-cards-snippet-editing/CST-9-travel-hybris-implementations"

];

const contentcards_manage=[
    "write/system/content-cards-main-editing"
];

const manage=[
    
    "manage/system/content-cards-snippet-published/all",
    "manage/system/content-cards-snippet-published/CST-1-corporate-enterprises",
    "manage/system/content-cards-snippet-published/CST-2-product-device-product-1",
   "manage/system/content-cards-snippet-published/CST-2-product-tracking-product-1",
    "manage/system/content-cards-snippet-published/CST-3-service-big-data-analytics"
];

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
        console.log('key > ',key);
        const childRef= orgRef.child(`${path}/${key}/identifiers`);
        updateByValue(childRef,childObj.identifiers);
        index++;
      } )
    })
  })
}

  
};

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

 
  update(manage);





function updateByValue(reference,identifiers)
{

const sortParams= getSortParams(identifiers);

reference.update(sortParams);

//console.log('sortParams > ',sortParams);

}



   function getCategoryTiming(Id,timestamp)
    {
  const BigNumber = 999999999999999;
  const newId= BigNumber+timestamp;
  console.log(timestamp,'>',newId);
  const val = `${Id}-${newId}`;
  return val;
    }

   function getCustomerTiming(Id,timestamp)
    {
      const BigNumber = 999999999999999;
  const newId= BigNumber+timestamp;
  const CUS_TIM = `${Id}-${newId}`;
  return CUS_TIM;

    }


   function getCustomerCategoryTiming(Id,SubId,timestamp)
    {
      const BigNumber = 999999999999999;
      const newId= BigNumber+timestamp;
      const CAT_CUS_TIM = `${Id}-${SubId}-${newId}`;
      return CAT_CUS_TIM;
    }

   function getCustomerTypeCategoryTiming(Id,SubId,LowId,timestamp)
    {
      const BigNumber = 999999999999999;
      const newId= BigNumber+timestamp;
      const   CUS_TYP_CAT_TIM = `${Id}-${SubId}-${LowId}-${newId}`;
      return  CUS_TYP_CAT_TIM;
    }

   function getESTTiming(Id,timestamp)
    {
      const BigNumber = 999999999999999;
      const newId= BigNumber+timestamp;
      const EST_TIM = `${Id}-${newId}`;
      return EST_TIM;
    }

  function  getCRCTiming(Id,timestamp)
    {
      const BigNumber = 999999999999999;
      const newId= BigNumber+timestamp;
      const CRC_TIM = `${Id}-${newId}`;
      return CRC_TIM;
    }

   function getCRCCustomerTiming(Id,SubId,timestamp)
    {
      const BigNumber = 999999999999999;
      const newId= BigNumber+timestamp;
      const CRC_CUS_TIM = `${Id}-${SubId}-${newId}`;
      return CRC_CUS_TIM;
    }


  function  getCRCESTTiming(Id,SubId,timestamp)
    {
      const BigNumber = 999999999999999;
      const newId= BigNumber+timestamp;
      const CRC_EST_TIM = `${Id}-${SubId}-${newId}`;
      return CRC_EST_TIM;
    }

  function  getSortParams(formData)
    {

      const SortParams={
         
          "CUS-TIM":getCustomerTiming(formData.CUS,formData.lastUpdated),
          "CAT-CUS-TIM":getCustomerCategoryTiming(formData.CAT,formData.CUS,formData.lastUpdated),
          "CUS-CAT-TIM":getCustomerCategoryTiming(formData.CUS,formData.CAT,formData.lastUpdated),
          "EST-TIM":getESTTiming(formData.EST,formData.lastUpdated),
          "CRC-TIM":getCRCTiming(formData.CRC,formData.lastUpdated),
          "CRC-CUS-TIM":getCRCCustomerTiming(formData.CRC,formData.CUS,formData.lastUpdated),
          "CRC-EST-TIM":getCRCESTTiming(formData.CRC,formData.EST,formData.lastUpdated),
          "CAT-TIM":getCategoryTiming(formData.CAT,formData.lastUpdated),
                       };
      return SortParams;
    }