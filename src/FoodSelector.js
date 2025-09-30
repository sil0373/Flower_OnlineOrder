export default function randomFood(){
    const foodcombination = [
      ['Rose', 'Protein', 165],
      ['Pentstemon', 'Carbohydrate', 111],
      ['Eucalyptus', 'Fat', 160],
      ['Delphinium', 'Carbohydrate', 55],
      ['Tulip', 'Fat', 579], 
      ['Lily', 'Protein', 144],
      ['Cymbidium', 'Carbohydrate', 86],
      ['Chrysanthemum', 'Protein', 208]
    ];
  
    let selectList = []
    for(let i=0; i<4; i++){
       const randomgenerator = Math.floor(Math.random() * foodcombination.length);
       let chosenfood = foodcombination[randomgenerator]
       selectList.push(chosenfood)
    }
    return selectList;
}