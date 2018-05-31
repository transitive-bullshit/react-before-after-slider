import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
import RaisedButton from 'material-ui/RaisedButton'

import BeforeAfterSlider from 'react-before-after-slider'

import placeholder from './placeholder.jpg'
import ribbon from './ribbon.png'
import images from './images'
import styles from './styles.module.css'

export default class App extends Component {
  state = {
    index: 0
  }

  render () {
    const {
      index
    } = this.state

    const current = images[index]

    const aspectRatio = 16 / 9
    const widthC = Math.min(720 - 32, window.innerWidth)
    const heightC = Math.min(480, window.innerHeight)

    const heightR = widthC / aspectRatio
    const widthR = heightC * aspectRatio

    const width = Math.min(widthC, widthR)
    const height = Math.min(heightC, heightR)

    console.log(index, current)

    const imageProps = {
      fallback: placeholder,
      showPreview: true,
      loader: (
        <CircularProgress
          className={styles.loading}
          color='#fff'
          size={24}
          thickness={2.5}
        />
      )
    }

    return (
      <MuiThemeProvider>
        <div>
          <a href='https://github.com/transitive-bullshit/react-before-after-slider'>
            <img
              src={ribbon}
              alt='Fork me on GitHub'
              className={styles.ribbon}
            />
          </a>

          <div
            className={styles.container}
          >
            <div>
              <h3>
                react-before-after-slider demo
              </h3>

              <BeforeAfterSlider
                className={styles.main}
                before={current.before.src}
                after={current.after.src}
                beforeProps={imageProps}
                afterProps={imageProps}
                width={width}
                height={height}
              />

              <p>
                Before image credit <a href={current.before.source.userUrl} target='_blank' rel='noopener'>{current.before.source.user}</a> / <a href={current.before.source.url} target='_blank' rel='noopener'>{current.before.source.label}</a>.
              </p>

              <p>
                After image credit <a href={current.after.source.userUrl} target='_blank' rel='noopener'>{current.after.source.user}</a> / <a href={current.after.source.url} target='_blank' rel='noopener'>{current.after.source.label}</a>.
              </p>

              <div className={styles.actions}>
                <RaisedButton
                  label='Prev'
                  onClick={this._onSelectPrev}
                />

                <RaisedButton
                  label='Next'
                  onClick={this._onSelectNext}
                />
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

  _onSelectPrev = () => {
    let index = this.state.index - 1
    if (index < 0) index = images.length - 1

    this.setState({ index })
  }

  _onSelectNext = () => {
    let index = this.state.index + 1
    if (index >= images.length) index = 0

    this.setState({ index })
  }
}
