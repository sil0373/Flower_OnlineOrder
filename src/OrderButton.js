export default function reducer(flowerState, action){
    const foodQuantity = [flowerState.Rose, flowerState.Pentstemon, flowerState.Eucalyptus, flowerState.Delphinium, flowerState.ItalianRuscus, flowerState.Tulip, flowerState.Lily, flowerState.Cymbidium, flowerState.Chrysanthemum]
    const totalFood = foodQuantity.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const initialState = {Rose: 0, Pentstemon: 0, Eucalyptus: 0, Delphinium: 0, ItalianRuscus: 0, Tulip: 0, Lily: 0, Cymbidium: 0, Chrysanthemum: 0
    }
     
    let newFoodState = {...flowerState} 
    let current = flowerState[action.flowerChoice];
    switch(action.type){
      case "increment":
          if(current < 4 && totalFood < 4 ){
            newFoodState[action.flowerChoice] = current + 1
         }
         break;
      case "decrement":
        if(current > 0 ){
           newFoodState[action.flowerChoice] =  current - 1
        }
        break;
      case "reset":
        return initialState
        break;
    
      default:
        throw Error('Unknown action.');
      };

    return newFoodState
    };