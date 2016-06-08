// @flow
import React from 'react';

export default function Layout({ children }: {children?: any}) : React.Element {
  return (
    <div>
      <h1>Hello, world!</h1>
      {children}
    </div>
  )
}
