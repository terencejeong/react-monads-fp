## Monadic Life!

Repo is used to demo how beneficial Monads can be!

# Monads and FP

1. Introduction Slide -> Tentatively "Monads and Functional Programming"
  - The Agenda of the FEDeration.

1. Disclaimer
  - I am not a functional expert, these are just some things I've learnt and find cool! If anyone loves this topic and would like to inject please do!  

1. What is a Functor?
  - Explain what a functor and what makes it so. 
  - Explain the functor laws.
  - Give an example of a functor and how it obeys these laws. 

1. What is a Monad? 
  - Explain what makes a functor a Monad. 
  - Explain flatMap.
  - Give an example of a flatMap. 

1. Let's write our own functor and Monad. 
  - Create the box.js
  ```js
    const Box = (x) => ({
      map: f => Box(f(x)),
      flatMap: f => f(x),
      inspect: () => `Box(${x})`
    })
  ```
  - Show how we can chain these together and make our code more testable and easier to read. 

  1. Great! So how can we apply this in a practical sense?