import React, { useState, useMemo, ReactNode } from 'react';
import { Maybe } from 'monet';
import MenuItem from '../components/MenuItem';
import { removedOptions, removeEverything, restaurant } from '../utils/RestaurantState';
import { IRestaurant, RamenItems } from '../types/Restaurant.type';

const partial = (fn: any, firstArg: any) => {
  return (...lastArgs: any) => {
    return fn(firstArg, ...lastArgs);
  }
}

function hasRamen(item: IRestaurant): Maybe<RamenItems[]> {
  return item.menu.ramen ? Maybe.Some(item.menu.ramen) : Maybe.None()
}

const MenuMonetContainer: React.FC = () => {
  const [ ramenRestaurant, setRamenRestaurant ] = useState<IRestaurant>(restaurant);

  function removeOptions(config: IRestaurant, e: React.SyntheticEvent) {
    e.preventDefault();
    setRamenRestaurant(config);
  }
  
  const ramenMenu = useMemo(() => Maybe.Some(ramenRestaurant)
  .flatMap(hasRamen)
  .cata(
    () => <div>No ramen</div>,
    (ramenMenuItems: RamenItems[]): ReactNode => ramenMenuItems.map((item: RamenItems) => <div key={item.name}><MenuItem item={item}/></div>)
  ), [ramenRestaurant]);

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {ramenMenu}
      </div>
      <button onClick={partial(removeOptions, removedOptions)}>Remove options</button>
      <button onClick={partial(removeOptions, removeEverything)}>Remove EVERYTHING</button>
    </>
  )
};

export default MenuMonetContainer
