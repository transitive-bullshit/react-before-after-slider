/**
 * @class BeforeAfterSlider
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import BlockImage from 'react-block-image'
import deviceDetect from 'react-device-detect'

import styles from './styles.css'

export default class BeforeAfterSlider extends Component {
  static propTypes = {
    before: PropTypes.string.isRequired,
    after: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    defaultProgress: PropTypes.number,
    className: PropTypes.string,
    beforeClassName: PropTypes.string,
    afterClassName: PropTypes.string,
    beforeProps: PropTypes.object,
    afterProps: PropTypes.object
  }

  static defaultProps = {
    defaultProgress: 0.5,
    beforeProps: { },
    afterProps: { }
  }

  state = {
    progress: this.props.defaultProgress
  }

  render() {
    const {
      before,
      after,
      className,
      defaultProgress,
      beforeClassName,
      afterClassName,
      beforeProps,
      afterProps,
      width,
      height,
      ...rest
    } = this.props

    const {
      progress
    } = this.state

    return (
      <div
        className={classNames(styles.container, className)}
        style={{
          width,
          height
        }}
        {...rest}
      >
        <div
          className={styles.afterWrapper}
          style={{
            width: `${100 * progress}%`
          }}
        >
          <BlockImage
            src={after}
            className={classNames(styles.after, afterClassName)}
            style={{ width }}
            {...afterProps}
          />
        </div>

        <BlockImage
          src={before}
          className={classNames(styles.before, beforeClassName)}
          {...beforeProps}
        />

        <div
          className={styles.handle}
          style={{
            left: `${100 * progress}%`
          }}
        />

        {deviceDetect.isMobile
          // TODO we can move this deeper down...
          ? [
            <div
              key={0}
              className={styles.wrapper}
              ref={this._contentRef}
              onTouchMove={this._onTouchMoveWrapper}
            />,
            <div
              key={1}
              className={styles.content}
              onTouchMove={this._onTouchMoveContent}
            />
          ]
          : [
            <div
              key={0}
              className={styles.wrapper}
              ref={this._contentRef}
              onMouseMove={this._onMouseMoveWrapper}
            />,
            <div
              key={1}
              className={styles.content}
              onMouseMove={this._onMouseMoveContent}
            />
          ]
        }

      </div>
    )
  }

  _contentRef = (ref) => {
    this._content = ref
  }

  _onMouseMoveWrapper = (event) => {
    const { offsetX } = event.nativeEvent
    const { width } = this.props
    const progress = Math.max(0, Math.min(1, (offsetX - width / 10) / width))
    this.setState({ progress })
  }

  _onMouseMoveContent = (event) => {
    const { offsetX } = event.nativeEvent
    const { width } = this.props
    const progress = Math.max(0, Math.min(1, offsetX / width))
    this.setState({ progress })
  }

  _onTouchMoveWrapper = (event) => {
    event.preventDefault()
    const rect = event.target.getBoundingClientRect()
    const offsetX = event.targetTouches[0].pageX - rect.left
    const { width } = this.props
    const progress = Math.max(0, Math.min(1, (offsetX - width / 10) / width))
    this.setState({ progress })
  }

  _onTouchMoveContent = (event) => {
    event.preventDefault()
    const rect = event.target.getBoundingClientRect()
    const offsetX = event.targetTouches[0].pageX - rect.left
    const { width } = this.props
    const progress = Math.max(0, Math.min(1, offsetX / width))
    this.setState({ progress })
  }
}
