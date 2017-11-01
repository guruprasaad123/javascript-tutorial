let anime ={
episode : '',
name : '',
};

let naruto = Object.create(anime, {
go:{
    language: function(){
      return "eng";
    },
    dubbed:function(){
      return true;
    }
}
});
naruto['episode']=326;
naruto['name']='naruto shippuden';


console.log(naruto);
