export const restaurant = { 
  name: 'Ippudo Ramen',
  location: 'Sydney',
  menu : {
  ramen : [
          {name: 'Tonkatsu', options: ['Garlic', 'Chilli']},
          {name: 'Shoyu', options: ['Garlic', 'Chilli', 'Extra egg', 'Extra Pork']},
          {name: 'Tsukemen', sizes: ['Small', 'Medium', 'Large', 'X-Large'], options: ['Pork', 'Anchovy', 'Shrimp']},
      ]
  }
};

export const removedOptions = { 
  name: 'Ippudo Ramen',
  location: 'Sydney',
  menu : {
  ramen : [
          {name: 'Tonkatsu'},
          {name: 'Shoyu'},
          {name: 'Tsukemen', sizes: ['Small', 'Medium', 'Large', 'X-Large'], options: ['Pork', 'Anchovy', 'Shrimp']},
      ]
  }
};

export const removeEverything = {
  name: '',
  location: '',
  menu : {
  ramen : []
  }
}
