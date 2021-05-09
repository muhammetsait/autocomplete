## 1- What is the difference between Component and PureComponent? give an example where it might break my app.

PureComponent always renders the same outputs if given the same props, i.e. it does not have internal side effects. They are easier to test and may have better performance.

I'm not sure how can they break the app.

## 2- Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

I have never needed to use these two together so not quite sure. However, I know that one of the major disadvantages of Context is causing too many renders. So maybe a combination of these two would harm the performance or cause too much re-rendering?

## 3- Describe 3 ways to pass information from a component to its PARENT.

i) the parent passes a callback as prop, which can be called to update the information in the parent component.
ii) a state management lib: if already using Redux/Mobx or other library the child can update the shared app state which can be read by the parent component.
iii) using Context: similar to number ii, the child may trigger a context update which re-renders all components using that Context.

## 4- Give 2 ways to prevent components from re-rendering.

I'm not sure about this. I know we can use the `key` prop to force re-rendering when the key changes. Maybe if setting a key that doesn't change would help? I would still assume that the component will re-render as long as the props or components state changes. So, if we make sure the state does not change, or if we split the component into smaller pieces that might help only render the relevant parts.

## 5- What is a fragment and why do we need it? Give an example where it might break my app.

In certain locations we can only define ONE child component. For instance, in a return statement, or as a child for another components that only accepts a single child (Link component in Next.js is an example of such a component). In these places we can use a fragment to wrap multiple sub-components to avoid the error without adding an extra element like a <div> or something similar.

It can bread the app if you use it without importing it? I can't think of other cases.

## 6- Give 3 examples of the HOC pattern.

```javascript
const Comp = (WrappedComponent) => {
  return (props) => {
    // some logic here...
    return (
      <>
        {/* some elements etc. */}
        <WrappedComponent props={props} />
      </>
    );
  }
}

// does this count?
const HigherComp = ({children}) => {
  // logic
  return (
    <div>
      {/* some elements */}
      {children}
    </div>
  );
}
```


## 7- what's the difference in handling exceptions in promises, callbacks and async...await.

Promises and async/await are only different in syntax and code organization. The same logic can be applied either one of them. However, based on different contexts the readability of the code may be improved by using one over the other.

I am not sure about the meaning of handling exceptions in callbacks.

## 8- How many arguments does setState take and why is it async.

It can take an object represnting the new state or a function which returns and object to replace the old state with. The function argument used when the new state relies on old state values (`setState((state, props) => { return newStateObj; })`).

I'm not sure why is it async.

## 9- List the steps needed to migrate a Class to Function Component.

  1- Create a new function component.
  2- Copy contents of render function to the new component.
  3- Replace `this.state` variables with `useState` hook.
  4- Replace life cycle methods with apropriate use of `useEffect` hook.
  5- Fix a bunch of bugs.

## 10- List a few ways styles can be used with components.

Regular css or scss files (write your own css, style using classNames)
Inline style prop
CSS-in-Js library like styled components or other similar solution
Utility classes (Tailwindcss)
CSS modules

## 11- How to render an HTML string coming from the server.

By using dangerouslySetInnerHTML={{ __html: HTML_STRING_GOES_HERE }}. This can result in XSS security bugs if the html string is unsafe, so all strings rendered like this must be sanitized on the server or the client side before rendering.
