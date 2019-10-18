import React from 'react';
import {RamenItems} from '../types/Restaurant.type';
import { Maybe } from 'monet';

const partial = (fn: any, firstArg: any) => {
  return (...lastArgs: any) => {
    return fn(firstArg, ...lastArgs);
  }
}

function getType(search: string, item: RamenItems) {
  return item[search] ? Maybe.Some(item[search]) : Maybe.None()
}

const hasSizes = (size: RamenItems)  => {
  return Maybe.Some(size)
  .flatMap(partial(getType, 'sizes'))
  .cata(
    () => <div>No other sizes</div>,
    ((sizes: any) => sizes.map((size: string) => <div key={size}>{size}</div>)
  ))
}

const hasOptions = (size: RamenItems)  => {
  return Maybe.Some(size)
  .flatMap(partial(getType, 'options'))
  .cata(
    () => <div>No Options</div>,
    ((options: any) => options.map((option: string) => <div key={option}>{option}</div>)
  ))
}


const MenuItem = ({ item }: {item: RamenItems}) => {
  return (
    <div>
      <h3>Ramen</h3>
      {item.name}
      <h3>Options</h3>
      {hasOptions(item)}
      <h3>Size</h3>
      {hasSizes(item)}
    </div>
  )
}

export default MenuItem
