import React, {memo, useState, useCallback, useMemo} from 'react';
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

function getSizes(item: string[]): Maybe<string[]> {
  console.log('hi there', item)
  return item ? Maybe.Some(item) : Maybe.None()
}

const MenuItem = memo(({ item }: {item: RamenItems}) => {
  console.log('has rendered', item)
  const [count, setCount] = useState<number>(0);

  const handleCount = useCallback((e) => {
    e.preventDefault();
    setCount(prevCount => prevCount + 1)
  }, [count]);

  const hasOptions = useMemo(() => {
    return Maybe.Some(item)
    .flatMap(partial(getType, 'options'))
    .cata(
      () => <div>No Options</div>,
      ((options: any) => options.map((option: string) => <div key={option}>{option}</div>)
    ))
  }, [item])

  const hasSizes = useMemo(() => {
    return Maybe.fromNull(item.sizes)
    .flatMap(getSizes)
    .cata(
      () => <div>No other sizes</div>,
      ((sizes: any) => sizes.map((size: string) => <div key={size}>{size}</div>)
    ))
  }, [item])
  
  return (
    <div>
      <h3>Ramen</h3>
      {item.name}
      <h3>Options</h3>
      {hasOptions}
      <h3>Size</h3>
      {hasSizes}
      {count}
      <button onClick={handleCount}></button>
    </div>
  )
})

export default MenuItem
