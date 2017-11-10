let application={
    supports:['IOS','Android'],
    getsupport(ele)
    {
     console.log(`this application supports : ${this.supports}`);
     console.log('end : ',ele);
    }

};



application.getsupport('Js'); // this application supports : IOS,Android

application.getsupport.call({supports:['IOS','Mac','Linux','Android','Windows','Windows phone']},'Nativescript'); // this application supports : undefined for call(); (object[,args]);

application.getsupport.apply({supports:['IOS','Mac','Linux','Android','Windows','Windows phone']},['Nativescript']); // this application supports : undefined forapply(); (object,[args])
