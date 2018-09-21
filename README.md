# Meetup-Server-Side
Sample application to demonstrate the capabilities of react server rendering.

Presented to [Triangle ReactJS](https://www.meetup.com/triangle-reactjs-developers/) on September 20<sup>th</sup> 2018.

Accompanying slideshow: https://docs.google.com/presentation/d/1sdAXpseLGR7IhNPxZvmuxWVqfjIS-f_8P1ck6-ZHRBg/edit?usp=sharing

## How To:
### Run
`yarn start` - This will perform a TypeScript compilation and webpack bundle before serving the content via `express` on port 2048.

**Note**: this application is not HMR aware nor is aware that anything has changed. This means that (currently) you must stop and restart the server on _every_ edit. 

## Design
### Basic Lifecycle
The base `/src` directory contains both code for client and the 'server.' Each has been appropriately named. 

The contents of `/src/App` are shared between the server rendered component and the client hosted application code. When executed, the server will perform the following lifecycle methods:
* `getDerivedStateFromProps` 
* `componentWillMount`
* `render`

When the client receives the code, the lifecycle will pick up with the following during hydration:
* `getDerivedStateFromProps`
* `componentDidMount`

Following hydration, the code will begin normal lifecycle patterns.

### Styles
`aphrodite` controls the styles for this library. 50% out of this is the CSS-in-JS library I prefer to use and 50% out of "I didn't feel like getting webpack fully going on initial commit."

This has the happy side-effect of introducing a new pattern and point which is that some packages might not take kindly to being server rendered and de-hydrated. The means of consumption for styles is revealed in the `htmlTemplate` function of `/src/Server.tsx`. 

### TypeScript
TypeScript is awesome and I love making headaches for myself by using it in trivial demonstrations. 

Honestly though, this could have been written in JS just as easily - I just want to share one of my favorite tools of front-end development. 