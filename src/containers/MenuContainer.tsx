import React from 'react';
import { IRestaurant, RamenItems} from '../types/Restaurant.type';
import { restaurant } from '../utils/RestaurantState';

// Will check if there is ramen in the menu
function hasRamenMenu(restaurant: any) {
  if (restaurant.menu && restaurant.menu.ramen) {
    return restaurant.menu.ramen.map((ramen: RamenItems) => {
      return {
        name: ramen.name,
        options: hasRamenOptions(ramen),
        sizes: hasRamenSizes(ramen)
      }
    });
  } else {
      return [];
  }
}

function hasRamenOptions(ramen: RamenItems) {
  return ramen.options ? ramen.options : [];
}

function hasRamenSizes(ramen: RamenItems) {
  return ramen.sizes ? ramen.sizes : [];
}

const ramenMenuItems = hasRamenMenu(restaurant);
// We want to display the list of ramen, the options and if they have other sizes.
const MenuContainer: React.FC = () => {
  return (
    <div>
      {
        ramenMenuItems.length > 0
          ?
            ramenMenuItems.map((item: RamenItems) => {
              return (
                <div key={item.name}>
                  <h1>{item.name}</h1>
                  <h3>Options</h3>
                  <div>
                    {
                      item.options && item.options.length > 0
                        ?
                          item.options.map((option: string) => <p key={option}>{option}</p>)
                        : 
                          'No other options'
                    }
                  </div>
                  <h3>Sizes</h3>
                  <div>
                    {
                      item.sizes && item.sizes.length > 0
                        ?
                          item.sizes.map((size: string) => <p key={size}>{size}</p>)
                        : 
                          'only one size'
                    }
                  </div>
                </div>
              )
             })
          : 
            'no ramen'
      }
    </div>
  )
};

export default MenuContainer;