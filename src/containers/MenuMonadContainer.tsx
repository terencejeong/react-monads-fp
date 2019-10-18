import React, { useState } from 'react';
import { Maybe } from 'monet';
import MenuItem from '../components/MenuItem';
import { removedOptions, removeEverything, restaurant } from '../utils/RestaurantState';
import { IRestaurant, RamenItems } from '../types/Restaurant.type';


function hasRamen(item: IRestaurant): Maybe<RamenItems[]> {
  return item.menu.ramen ? Maybe.Some(item.menu.ramen) : Maybe.None()
}

function logMe(item: RamenItems[]) {
  console.log('item', item);
  return item
}

const MenuMonetContainer: React.FC = () => {
  const [ ramenRestaurant, setRamenRestaurant ] = useState<any>(restaurant);

  function removeOptions(e: React.SyntheticEvent, config: IRestaurant) {
    e.preventDefault();
    setRamenRestaurant(config);
  }
  
  const ramenMenu = Maybe.Some(ramenRestaurant)
  .flatMap(hasRamen)
  .map(logMe)
  .cata(
    () => <div>No ramen</div>,
    (ramenMenuItems: RamenItems[]): any => ramenMenuItems.map((item: RamenItems) => <div key={item.name}><MenuItem item={item}/></div>)
  );

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {ramenMenu}
      </div>
      <button onClick={(e) => removeOptions(e, removedOptions)}>Remove options</button>
      <button onClick={(e) => removeOptions(e, removeEverything)}>Remove EVERYTHING</button>
    </>
  )
};

export default MenuMonetContainer
