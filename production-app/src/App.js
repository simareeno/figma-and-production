import React from 'react'
import { ReactComponent as About } from '@example/tokens/icons/about.svg'
import { ReactComponent as Copyright } from '@example/tokens/icons/copyright.svg'
import { ReactComponent as Contacts } from '@example/tokens/icons/contacts.svg'

import '@example/tokens/dist/styles.css'
import './App.css'

function App() {
    return (
        <div className="App">
            <h1>An example with design tokens</h1>
            <section>
                <h2>Colors</h2>
                <div className="color brand-color">Brand color</div>
                <div className="color link-color">Link color</div>
                <div className="color border-color">Border color</div>
                <div className="color background-color">Background color</div>
            </section>
            <section>
                <h2>Icons</h2>
                <div className="icon">
                    <About />
                </div>
                <div className="icon">
                    <Copyright />
                </div>
                <div className="icon">
                    <Contacts />
                </div>
            </section>
            <a href="https://github.com/simareeno/figma-and-production">
                GitHub
            </a>
        </div>
    )
}

export default App
