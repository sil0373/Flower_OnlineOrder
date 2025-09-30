export default function reducer(foodState, action){
    const foodQuantity = [foodState.Rose, foodState.Pentstemon, foodState.Eucalyptus, foodState.Delphinium, foodState.Tulip, foodState.Lily, foodState.Cymbidium, foodState.Chrysanthemum]
    const totalFood = foodQuantity.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    let newFoodState = {...foodState} 
    const current = foodState[action.foodChoice];
    switch(action.type){
      case "increment":
          if(current < 4 && totalFood < 4 ){
            newFoodState[action.foodChoice] = current + 1
         }
         break;
      case "decrement":
        if(current > 0 ){
           newFoodState[action.foodChoice] =  current - 1
        }
        break;
      default:
        throw Error('Unknown action.');
      };

    return newFoodState
    };