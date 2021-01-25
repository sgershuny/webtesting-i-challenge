module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancement === 20){
    return item
  } else{

    return { ...item,
      enhancement: item.enhancement+1 };
  }
}

function fail(item) {
  if(item.enhancement < 15){
    
    return {...item,
      durability: item.durability-5}
  } 
  
  if(item.enhancement >= 15){
    
    const dura = item.durability - 10
    let enhance = item.enhancement

    if(item.enhancement > 16){
      enhance = item.enhancement -1
    }
    return { ...item,
      enhancement: enhance,
      durability: dura };
  }
}

function repair(item) {
  return { ...item,
    durability: 100 };
}

function get(item) {
  if(item.enhancement > 0){
    return{ ...item,
      name: `[+${item.enhancement}] ${item.name}`
    }
  }
  else{
    return item
  }
}
