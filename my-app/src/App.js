import React from "react"

function App() {
  return (
    <div>
      <Header />

      <Switch>
            <Route exact path="/">
                <Photos/>
            </Route>
            <Route path="/cart">
                <Cart/>
            </Route>
        </Switch>
     
      
   </div>
  )
}

export default App;
